import { Box, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import SideMenu from '../components/sideMenu';
import { useState } from 'react';

export default function AppLayout() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setSideMenuOpen(!sideMenuOpen);
  };

  const handleMenuClose = () => {
    setSideMenuOpen(false);
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #fafbfc 0%, #ffffff 50%, #f8fafc 100%)',
      }}
    >
      <Header onMenuClick={handleMenuToggle} />
      
      <SideMenu 
        open={sideMenuOpen} 
        onClose={handleMenuClose}
      />
      
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '200px',
            background: 'linear-gradient(135deg, rgba(0, 33, 58, 0.02) 0%, rgba(49, 251, 43, 0.02) 100%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Outlet />
        </Box>
      </Box>
      
      <Footer />
    </Box>
  );
}