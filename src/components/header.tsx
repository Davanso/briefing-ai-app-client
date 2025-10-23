import { AppBar, Toolbar, Typography, IconButton, Box, Avatar, Tooltip } from '@mui/material';
import { 
  Menu as MenuIcon, 
  Settings,
  Logout,
  Search,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleSettings = () => {
    navigate('/settings');
  };

  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={{ 
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: '#ffffff',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
      }}
    >
      <Toolbar sx={{ py: 1 }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onMenuClick}
          edge="start"
          sx={{ 
            mr: 2,
            color: '#00213a',
            '&:hover': {
              backgroundColor: 'rgba(49, 251, 43, 0.08)',
            }
          }}
        >
          <MenuIcon />
        </IconButton>
        
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Box sx={{ cursor: 'pointer' }} onClick={() => navigate('/dashboard')}>
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                fontWeight: 700,
                color: '#00213a',
                fontSize: '1.25rem',
                lineHeight: 1,
              }}
            >
              Briefing AI
            </Typography>
            <Typography 
              variant="caption" 
              sx={{ 
                color: '#64748b',
                fontSize: '0.75rem',
                fontWeight: 500,
              }}
            >
              Sistema de Monitoramento Inteligente
            </Typography>
          </Box>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>     
          <Tooltip title="Configurações" arrow>
            <IconButton 
              onClick={handleSettings}
              sx={{ 
                color: '#64748b',
                '&:hover': {
                  backgroundColor: 'rgba(49, 251, 43, 0.08)',
                  color: '#31fb2b',
                }
              }}
            >
              <Settings />
            </IconButton>
          </Tooltip>
          
          <Box sx={{ ml: 1, pl: 1, borderLeft: '1px solid #e2e8f0' }}>
            <Tooltip title={`Perfil: ${user?.name || 'Usuário'}`} arrow>
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  src={user?.avatar}
                  sx={{
                    width: 36,
                    height: 36,
                    background: 'linear-gradient(135deg, #00213a 0%, #31fb2b 100%)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                  }}
                >
                  {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
          
          <Tooltip title="Sair" arrow>
            <IconButton 
              onClick={handleLogout}
              sx={{ 
                color: '#64748b',
                ml: 1,
                '&:hover': {
                  backgroundColor: 'rgba(239, 68, 68, 0.08)',
                  color: '#ef4444',
                }
              }}
            >
              <Logout />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
}