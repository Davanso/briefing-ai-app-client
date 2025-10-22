import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { PublicRoute } from '../components/PublicRoute';
import AppLayout from '../layouts/AppLayout';

// Public pages
import LoginPage from '../pages/public/login';
import RegisterPage from '../pages/public/RegisterPage';

// Private pages
import DashboardPage from '../pages/private/DashboardPage';
import BriefingsPage from '../pages/private/BriefingsPage';
import NewsPage from '../pages/private/NewsPage';
import ReportsPage from '../pages/private/ReportsPage';
import SettingsPage from '../pages/private/SettingsPage';

export const router = createBrowserRouter([
  // Public routes
  {
    path: '/login',
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: '/register',
    element: (
      <PublicRoute>
        <RegisterPage />
      </PublicRoute>
    ),
  },
  
  // Protected routes with layout
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
      {
        path: 'briefings',
        element: <BriefingsPage />,
      },
      {
        path: 'news',
        element: <NewsPage />,
      },
      {
        path: 'reports',
        element: <ReportsPage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
    ],
  },
  
  // Fallback for unknown routes
  {
    path: '*',
    element: (
      <PublicRoute redirectTo="/dashboard">
        <LoginPage />
      </PublicRoute>
    ),
  },
]);