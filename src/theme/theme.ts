import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00213a', // Dark blue
      light: '#2a4a6b',
      dark: '#001529',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#31fb2b', // Bright green
      light: '#66ff61',
      dark: '#28d123',
      contrastText: '#00213a',
    },
    success: {
      main: '#31fb2b',
      light: '#66ff61',
      dark: '#28d123',
      contrastText: '#00213a',
    },
    background: {
      default: '#fafbfc',
      paper: '#ffffff',
    },
    text: {
      primary: '#00213a',
      secondary: '#64748b',
    },
    divider: '#e2e8f0',
    grey: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 800,
      color: '#00213a',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 700,
      color: '#00213a',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '1.875rem',
      fontWeight: 600,
      color: '#00213a',
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#00213a',
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#00213a',
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 500,
      color: '#00213a',
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      color: '#64748b',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      color: '#64748b',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '0.875rem',
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      color: '#00213a',
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      color: '#64748b',
      lineHeight: 1.4,
    },
  },
  shape: {
    borderRadius: 16,
  },
  shadows: [
    'none',
    '0px 1px 2px rgba(0, 33, 58, 0.06), 0px 1px 3px rgba(0, 33, 58, 0.10)',
    '0px 1px 2px rgba(0, 33, 58, 0.06), 0px 2px 4px rgba(0, 33, 58, 0.10)',
    '0px 1px 3px rgba(0, 33, 58, 0.10), 0px 4px 6px rgba(0, 33, 58, 0.15)',
    '0px 2px 4px rgba(0, 33, 58, 0.10), 0px 8px 16px rgba(0, 33, 58, 0.15)',
    '0px 4px 6px rgba(0, 33, 58, 0.10), 0px 10px 20px rgba(0, 33, 58, 0.15)',
    '0px 4px 8px rgba(0, 33, 58, 0.12), 0px 12px 24px rgba(0, 33, 58, 0.15)',
    '0px 6px 10px rgba(0, 33, 58, 0.12), 0px 16px 32px rgba(0, 33, 58, 0.15)',
    '0px 8px 12px rgba(0, 33, 58, 0.12), 0px 20px 40px rgba(0, 33, 58, 0.15)',
    '0px 10px 16px rgba(0, 33, 58, 0.12), 0px 24px 48px rgba(0, 33, 58, 0.15)',
    '0px 12px 20px rgba(0, 33, 58, 0.12), 0px 28px 56px rgba(0, 33, 58, 0.15)',
    '0px 16px 24px rgba(0, 33, 58, 0.12), 0px 32px 64px rgba(0, 33, 58, 0.15)',
    '0px 20px 28px rgba(0, 33, 58, 0.12), 0px 36px 72px rgba(0, 33, 58, 0.15)',
    '0px 24px 32px rgba(0, 33, 58, 0.12), 0px 40px 80px rgba(0, 33, 58, 0.15)',
    '0px 28px 36px rgba(0, 33, 58, 0.12), 0px 44px 88px rgba(0, 33, 58, 0.15)',
    '0px 32px 40px rgba(0, 33, 58, 0.12), 0px 48px 96px rgba(0, 33, 58, 0.15)',
    '0px 36px 44px rgba(0, 33, 58, 0.12), 0px 52px 104px rgba(0, 33, 58, 0.15)',
    '0px 40px 48px rgba(0, 33, 58, 0.12), 0px 56px 112px rgba(0, 33, 58, 0.15)',
    '0px 44px 52px rgba(0, 33, 58, 0.12), 0px 60px 120px rgba(0, 33, 58, 0.15)',
    '0px 48px 56px rgba(0, 33, 58, 0.12), 0px 64px 128px rgba(0, 33, 58, 0.15)',
    '0px 52px 60px rgba(0, 33, 58, 0.12), 0px 68px 136px rgba(0, 33, 58, 0.15)',
    '0px 56px 64px rgba(0, 33, 58, 0.12), 0px 72px 144px rgba(0, 33, 58, 0.15)',
    '0px 60px 68px rgba(0, 33, 58, 0.12), 0px 76px 152px rgba(0, 33, 58, 0.15)',
    '0px 64px 72px rgba(0, 33, 58, 0.12), 0px 80px 160px rgba(0, 33, 58, 0.15)',
    '0px 68px 76px rgba(0, 33, 58, 0.12), 0px 84px 168px rgba(0, 33, 58, 0.15)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 32px',
          boxShadow: 'none',
          fontSize: '0.875rem',
          fontWeight: 600,
          textTransform: 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(0, 33, 58, 0.2)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #00213a 0%, #2a4a6b 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #001529 0%, #1a3f5e 100%)',
          },
        },
        outlined: {
          borderColor: '#00213a',
          color: '#00213a',
          borderWidth: 2,
          '&:hover': {
            backgroundColor: 'rgba(0, 33, 58, 0.04)',
            borderColor: '#00213a',
            borderWidth: 2,
          },
        },
        text: {
          color: '#00213a',
          '&:hover': {
            backgroundColor: 'rgba(0, 33, 58, 0.04)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 2px 8px rgba(0, 33, 58, 0.08)',
          border: '1px solid rgba(226, 232, 240, 0.8)',
          backdropFilter: 'blur(8px)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0px 8px 32px rgba(0, 33, 58, 0.12)',
            transform: 'translateY(-4px)',
            borderColor: 'rgba(49, 251, 43, 0.3)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            backgroundColor: '#ffffff',
            transition: 'all 0.3s ease',
            '& fieldset': {
              borderColor: '#e2e8f0',
              borderWidth: 2,
            },
            '&:hover fieldset': {
              borderColor: '#31fb2b',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#31fb2b',
              boxShadow: '0 0 0 3px rgba(49, 251, 43, 0.1)',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
          fontSize: '0.75rem',
          height: 28,
        },
        filled: {
          backgroundColor: 'rgba(49, 251, 43, 0.12)',
          color: '#00213a',
          border: '1px solid rgba(49, 251, 43, 0.3)',
          '&:hover': {
            backgroundColor: 'rgba(49, 251, 43, 0.2)',
          },
        },
        outlined: {
          borderColor: '#00213a',
          color: '#00213a',
          '&:hover': {
            backgroundColor: 'rgba(0, 33, 58, 0.04)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 2px 8px rgba(0, 33, 58, 0.08)',
          border: '1px solid rgba(226, 232, 240, 0.8)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#00213a',
          boxShadow: '0px 1px 3px rgba(0, 33, 58, 0.12)',
          borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#ffffff',
          borderRight: '1px solid rgba(226, 232, 240, 0.8)',
          boxShadow: '4px 0 12px rgba(0, 33, 58, 0.08)',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          margin: '4px 8px',
          '&.Mui-selected': {
            backgroundColor: 'rgba(49, 251, 43, 0.12)',
            border: '1px solid rgba(49, 251, 43, 0.3)',
            '&:hover': {
              backgroundColor: 'rgba(49, 251, 43, 0.2)',
            },
          },
          '&:hover': {
            backgroundColor: 'rgba(0, 33, 58, 0.04)',
            borderRadius: 12,
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '0.875rem',
          minHeight: 48,
          '&.Mui-selected': {
            color: '#31fb2b',
            fontWeight: 600,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#31fb2b',
          height: 3,
          borderRadius: '3px 3px 0 0',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: '1px solid',
        },
        standardSuccess: {
          backgroundColor: 'rgba(49, 251, 43, 0.1)',
          borderColor: 'rgba(49, 251, 43, 0.3)',
          color: '#00213a',
        },
        standardInfo: {
          backgroundColor: 'rgba(0, 33, 58, 0.1)',
          borderColor: 'rgba(0, 33, 58, 0.3)',
          color: '#00213a',
        },
      },
    },
  },
});

export default theme;