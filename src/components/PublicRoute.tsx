import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Box, CircularProgress } from '@mui/material';

interface PublicRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

export const PublicRoute: React.FC<PublicRouteProps> = ({ 
  children, 
  redirectTo = '/dashboard' 
}) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #00213a 0%, #2a4a6b 50%, #ffffff 100%)',
        }}
      >
        <CircularProgress sx={{ color: '#31fb2b' }} />
      </Box>
    );
  }

  if (isAuthenticated) {
    // Redirect to dashboard if already authenticated
    return <Navigate to={redirectTo} replace />;
  }

  return <>{children}</>;
};