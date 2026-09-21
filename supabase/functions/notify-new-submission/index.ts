// notify-new-submission
//
// Emails the site owner when a student submits a piece to Student Voices.
// Called by a database trigger on public.student_posts (see supabase/schema.sql)
// with just { id } — it never trusts anything else in the request.
//
// Safe to leave callable without a JWT: it only ever emails about a real
// submission that hasn't been emailed about yet (it "claims" the row by
// setting notified_at), so calling it again, or with a made-up id, does nothing.
//
// Setup (Supabase dashboard → Edge Functions → Secrets):
//   RESEND_API_KEY  — from resend.com → API Keys
//   ALERT_EMAIL     — the inbox to notify (on Resend's free plan without a
//                     verified domain, this must be the email you signed up with)
import { createClient } from 'npm:@supabase/supabase-js@2'

const PROJECT_REF = 'pimolgbwpogwxvlnyjon'

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)
}

function json(status: number, body: Record<string, unknown>) {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } })
}

Deno.serve(async (req) => {
  if (req.method !== 'POST') return json(405, { error: 'method not allowed' })

  let id: unknown
  try {
    ;({ id } = await req.json())
  } catch {
    return json(400, { error: 'invalid json' })
  }
  if (typeof id !== 'string' || !/^[0-9a-f-]{36}$/i.test(id)) return json(400, { error: 'invalid id' })

  const apiKey = Deno.env.get('RESEND_API_KEY')
  const to = Deno.env.get('ALERT_EMAIL')
  if (!apiKey || !to) {
    // Not set up yet — leave the row unclaimed so nothing is lost.
    console.warn('notify-new-submission: RESEND_API_KEY / ALERT_EMAIL not set; skipping')
    return json(200, { skipped: 'not configured' })
  }

  const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!)

  // Claim the row atomically: only one call can flip notified_at from null.
  const { data: post, error } = await supabase
    .from('student_posts')
    .update({ notified_at: new Date().toISOString() })
    .eq('id', id)
    .is('notified_at', null)
    .select('id, author_name, school, grade, category, title, body, created_at')
    .maybeSingle()

  if (error) {
    console.error('notify-new-submission: claim failed', error)
    return json(500, { error: 'db error' })
  }
  if (!post) return json(200, { skipped: 'already notified or not found' })

  const words = post.body.trim().split(/\s+/).length
  const preview = post.body.replace(/\s+/g, ' ').trim().slice(0, 600)
  const details = [post.grade ? `Grade ${post.grade}` : null, post.school, post.category].filter(Boolean).join(' · ')
  const dashboardUrl = `https://supabase.com/dashboard/project/${PROJECT_REF}/editor`

  const html = `
  <div style="font-family:Arial,sans-serif;max-width:560px;color:#1a2e25">
    <p style="font-size:13px;color:#2F6B4F;font-weight:bold;margin:0">NEW STUDENT VOICES SUBMISSION</p>
    <h2 style="margin:8px 0 4px">${escapeHtml(post.title)}</h2>
    <p style="margin:0 0 16px;color:#5b6b62">by ${escapeHtml(post.author_name)}${details ? ` · ${escapeHtml(details)}` : ''} · ${words} words</p>
    <p style="background:#f7efdf;padding:14px 16px;border-radius:10px;line-height:1.5">${escapeHtml(preview)}${post.body.length > 600 ? '…' : ''}</p>
    <p style="margin-top:20px">
      <a href="${dashboardUrl}" style="background:#1f7a55;color:#fff;padding:10px 16px;border-radius:8px;text-decoration:none;font-weight:bold">Review in Supabase</a>
    </p>
    <p style="font-size:12px;color:#8a978f;margin-top:20px">Open the student_posts table and set status to "approved" to publish, or "rejected" to decline.</p>
  </div>`

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: 'School of Cents <onboarding@resend.dev>',
      to: [to],
      subject: `New submission: ${post.title}`,
      html,
    }),
  })

  if (!res.ok) {
    const detail = await res.text()
    console.error('notify-new-submission: Resend error', res.status, detail)
    // Un-claim so a later retry can still send it.
    await supabase.from('student_posts').update({ notified_at: null }).eq('id', post.id)
    return json(502, { error: 'email send failed' })
  }

  return json(200, { sent: true })
})
