import { useState } from 'react';
import { Box, Toolbar, Container } from '@mui/material';
import Header from '../../components/header';
import Footer from '../../components/footer';
import SideMenu from '../../components/sideMenu';
import BriefingSystem from '../../components/briefingSystem';

export default function HomePage() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState('dashboard');

  const handleMenuToggle = () => {
    setSideMenuOpen(!sideMenuOpen);
  };

  const handleMenuClose = () => {
    setSideMenuOpen(false);
  };

  const handleSectionChange = (section: string) => {
    setSelectedSection(section);
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
        selectedSection={selectedSection}
        onSectionChange={handleSectionChange}
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
        <Container 
          maxWidth="xl" 
          sx={{ 
            py: { xs: 2, md: 4 },
            position: 'relative',
            zIndex: 1,
          }}
        >
          <BriefingSystem />
        </Container>
      </Box>
      
      <Footer />
    </Box>
  );
}