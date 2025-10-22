import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Toolbar,
  Box,
  Typography,
  Avatar,
  Chip,
  Stack,
} from '@mui/material';
import { 
  Dashboard,
  Article,
  Circle,
  Bolt,
  Newspaper,
  Settings,
  // Assessment,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface SideMenuProps {
  open: boolean;
  onClose: () => void;
}

const drawerWidth = 280;

const menuItems = [
  { 
    id: 'dashboard', 
    label: 'Dashboard', 
    icon: <Dashboard />, 
    color: '#31fb2b',
    badge: null,
    path: '/dashboard',
  },
  { 
    id: 'noticias', 
    label: 'Notícias', 
    icon: <Newspaper />, 
    color: '#f59e0b',
    badge: '2',
    path: '/news',
  },
  { 
    id: 'briefings', 
    label: 'Briefings Gerados', 
    icon: <Article />, 
    color: '#8b5cf6',
    badge: '12',
    path: '/briefings',
  },
  // { 
  //   id: 'reports', 
  //   label: 'Relatórios', 
  //   icon: <Assessment />, 
  //   color: '#3b82f6',
  //   badge: null,
  //   path: '/reports',
  // },
  { 
    id: 'settings', 
    label: 'Configurações', 
    icon: <Settings />, 
    color: '#64748b',
    badge: null,
    path: '/settings',
  },
];

export default function SideMenu({ open, onClose }: SideMenuProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          background: 'linear-gradient(180deg, #ffffff 0%, #fafbfc 100%)',
        },
      }}
    >
      <Toolbar />
      
      <Box sx={{ overflow: 'auto', height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* User Profile Section */}
        <Box sx={{ p: 3, borderBottom: '1px solid #e2e8f0' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Avatar
              src={user?.avatar}
              sx={{
                width: 48,
                height: 48,
                background: 'linear-gradient(135deg, #00213a 0%, #31fb2b 100%)',
                fontSize: '1.25rem',
                fontWeight: 700,
              }}
            >
              {user?.name?.charAt(0)?.toUpperCase() || 'U'}
            </Avatar>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#00213a' }}>
                {user?.name || 'Usuário'}
              </Typography>
              <Typography variant="caption" sx={{ color: '#64748b' }}>
                {user?.email || 'user@briefingai.com'}
              </Typography>
            </Box>
          </Box>
        </Box>
        
        {/* Navigation Menu */}
        <Box sx={{ flex: 1, py: 2 }}>
          <Box sx={{ px: 3, mb: 2 }}>
            <Typography 
              variant="overline" 
              sx={{ 
                fontWeight: 700, 
                color: '#64748b',
                fontSize: '0.75rem',
                letterSpacing: '0.5px',
              }}
            >
              Menu Principal
            </Typography>
          </Box>
          
          <List sx={{ px: 2 }}>
            {menuItems.map((item) => {
              const isSelected = location.pathname === item.path;
              return (
                <ListItem key={item.id} disablePadding sx={{ mb: 0.5 }}>
                  <ListItemButton
                    selected={isSelected}
                    onClick={() => handleNavigation(item.path)}
                    sx={{
                      borderRadius: 3,
                      py: 1.5,
                      '&.Mui-selected': {
                        backgroundColor: 'rgba(49, 251, 43, 0.12)',
                        border: '1px solid rgba(49, 251, 43, 0.3)',
                        '&:hover': {
                          backgroundColor: 'rgba(49, 251, 43, 0.16)',
                        },
                        '& .MuiListItemIcon-root': {
                          color: '#31fb2b',
                        },
                        '& .MuiListItemText-primary': {
                          color: '#00213a',
                          fontWeight: 600,
                        },
                      },
                      '&:hover': {
                        backgroundColor: 'rgba(0, 33, 58, 0.04)',
                      },
                    }}
                  >
                    <ListItemIcon 
                      sx={{ 
                        color: isSelected ? '#31fb2b' : item.color,
                        minWidth: 40,
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText 
                      primary={item.label}
                      primaryTypographyProps={{
                        fontWeight: isSelected ? 600 : 500,
                        fontSize: '0.875rem',
                        color: isSelected ? '#00213a' : '#64748b',
                      }}
                    />
                    {item.badge && (
                      <Chip
                        label={item.badge}
                        size="small"
                        sx={{
                          height: 20,
                          fontSize: '0.625rem',
                          fontWeight: 600,
                          backgroundColor: item.badge === 'Ativo' ? 'rgba(49, 251, 43, 0.12)' : 
                                         item.badge === 'Novo' ? 'rgba(59, 130, 246, 0.12)' : 
                                         'rgba(100, 116, 139, 0.12)',
                          color: item.badge === 'Ativo' ? '#31fb2b' : 
                                 item.badge === 'Novo' ? '#3b82f6' : 
                                 '#64748b',
                          border: `1px solid ${
                            item.badge === 'Ativo' ? 'rgba(49, 251, 43, 0.3)' : 
                            item.badge === 'Novo' ? 'rgba(59, 130, 246, 0.3)' : 
                            'rgba(100, 116, 139, 0.3)'
                          }`,
                        }}
                      />
                    )}
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
        
        {/* Status Section */}
        <Box sx={{ p: 3, borderTop: '1px solid #e2e8f0' }}>
          <Stack spacing={2}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: 2,
                  background: 'rgba(49, 251, 43, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Bolt sx={{ color: '#31fb2b', fontSize: '1.2rem' }} />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle2" sx={{ color: '#00213a', fontWeight: 600 }}>
                  Sistema Ativo
                </Typography>
                <Typography variant="caption" sx={{ color: '#64748b' }}>
                  Monitorando 24/7
                </Typography>
              </Box>
              <Circle sx={{ color: '#31fb2b', fontSize: '0.75rem' }} />
            </Box>
            
            <Box 
              sx={{ 
                p: 2, 
                borderRadius: 2, 
                background: 'rgba(49, 251, 43, 0.08)',
                border: '1px solid rgba(49, 251, 43, 0.2)',
              }}
            >
              <Typography variant="caption" sx={{ color: '#00213a', fontWeight: 600 }}>
                💡 Dica do dia
              </Typography>
              <Typography variant="caption" sx={{ color: '#64748b', display: 'block', mt: 0.5 }}>
                Use palavras-chave específicas para melhores resultados no monitoramento.
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Drawer>
  );
}