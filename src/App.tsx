import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from '@/context/AuthContext'
import { ProgressProvider } from '@/context/ProgressContext'
import { ToastProvider } from '@/context/ToastContext'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { AnalyticsPageView } from '@/components/AnalyticsPageView'

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'
import ForgotPassword from '@/pages/ForgotPassword'
import ResetPassword from '@/pages/ResetPassword'
import Dashboard from '@/pages/Dashboard'
import Learn from '@/pages/Learn'
import TopicDetail from '@/pages/TopicDetail'
import Lesson from '@/pages/Lesson'
import RealLife from '@/pages/RealLife'
import ScenarioDetail from '@/pages/ScenarioDetail'
import Challenges from '@/pages/Challenges'
import Calculators from '@/pages/Calculators'
import ProgressPage from '@/pages/Progress'
import Profile from '@/pages/Profile'
import Leaderboard from '@/pages/Leaderboard'
import Privacy from '@/pages/Privacy'
import Terms from '@/pages/Terms'
import Contact from '@/pages/Contact'
import NotFound from '@/pages/NotFound'

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AuthProvider>
          <ToastProvider>
            <ProgressProvider>
              <AnalyticsPageView />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />

                <Route path="/learn" element={<Learn />} />
                <Route path="/learn/:categoryId" element={<TopicDetail />} />
                <Route path="/real-life" element={<RealLife />} />
                <Route path="/real-life/:scenarioId" element={<ScenarioDetail />} />
                <Route path="/calculators" element={<Calculators />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/contact" element={<Contact />} />

                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/lesson/:lessonId"
                  element={
                    <ProtectedRoute>
                      <Lesson />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/challenges"
                  element={
                    <ProtectedRoute>
                      <Challenges />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/progress"
                  element={
                    <ProtectedRoute>
                      <ProgressPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </ProgressProvider>
          </ToastProvider>
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  )
}
