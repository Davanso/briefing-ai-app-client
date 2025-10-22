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
  LinearProgress,
  Chip,
  Stack,
} from '@mui/material';
import { 
  Dashboard,
  Article,
  Search,
  Settings,
  TrendingUp,
  NotificationImportant,
  Instagram,
  Analytics,
  Circle,
  Bolt,
} from '@mui/icons-material';

interface SideMenuProps {
  open: boolean;
  onClose: () => void;
  selectedSection: string;
  onSectionChange: (section: string) => void;
}

const drawerWidth = 280;

const menuItems = [
  { 
    id: 'dashboard', 
    label: 'Dashboard', 
    icon: <Dashboard />, 
    color: '#31fb2b',
    badge: null,
  },
  { 
    id: 'monitoring', 
    label: 'Monitoramento', 
    icon: <Search />, 
    color: '#3b82f6',
    badge: 'Ativo',
  },
  { 
    id: 'briefings', 
    label: 'Briefings Gerados', 
    icon: <Article />, 
    color: '#8b5cf6',
    badge: '12',
  },
  { 
    id: 'trends', 
    label: 'Tendências', 
    icon: <TrendingUp />, 
    color: '#f59e0b',
    badge: null,
  },
  { 
    id: 'instagram', 
    label: 'Conteúdo Instagram', 
    icon: <Instagram />, 
    color: '#e91e63',
    badge: 'Novo',
  },
  { 
    id: 'analytics', 
    label: 'Analytics', 
    icon: <Analytics />, 
    color: '#06b6d4',
    badge: null,
  },
  { 
    id: 'alerts', 
    label: 'Alertas', 
    icon: <NotificationImportant />, 
    color: '#ef4444',
    badge: '3',
  },
  { 
    id: 'settings', 
    label: 'Configurações', 
    icon: <Settings />, 
    color: '#64748b',
    badge: null,
  },
];

export default function SideMenu({ open, onClose, selectedSection, onSectionChange }: SideMenuProps) {
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
              sx={{
                width: 48,
                height: 48,
                background: 'linear-gradient(135deg, #00213a 0%, #31fb2b 100%)',
                fontSize: '1.25rem',
                fontWeight: 700,
              }}
            >
              U
            </Avatar>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#00213a' }}>
                Usuário Admin
              </Typography>
              <Typography variant="caption" sx={{ color: '#64748b' }}>
                admin@briefingai.com
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="caption" sx={{ color: '#64748b' }}>
                Uso do plano
              </Typography>
              <Typography variant="caption" sx={{ color: '#31fb2b', fontWeight: 600 }}>
                75%
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={75}
              sx={{
                height: 6,
                borderRadius: 3,
                backgroundColor: '#e2e8f0',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: '#31fb2b',
                  borderRadius: 3,
                },
              }}
            />
          </Box>
          
          <Chip
            label="Plano Pro"
            size="small"
            sx={{
              backgroundColor: 'rgba(49, 251, 43, 0.12)',
              color: '#00213a',
              fontWeight: 600,
              border: '1px solid rgba(49, 251, 43, 0.3)',
            }}
          />
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
            {menuItems.map((item) => (
              <ListItem key={item.id} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  selected={selectedSection === item.id}
                  onClick={() => {
                    onSectionChange(item.id);
                    onClose();
                  }}
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
                      color: selectedSection === item.id ? '#31fb2b' : item.color,
                      minWidth: 40,
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: selectedSection === item.id ? 600 : 500,
                      fontSize: '0.875rem',
                      color: selectedSection === item.id ? '#00213a' : '#64748b',
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
            ))}
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