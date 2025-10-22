import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  Divider,
  Container,
  Stack,
  Alert,
  Link,
  Fade,
  Zoom,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Email,
  Lock,
  Google,
  LinkedIn,
  AutoAwesome,
  TrendingUp,
  Speed,
} from '@mui/icons-material';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setIsLoading(true);
    setError('');
    
    // Simulate login process
    setTimeout(() => {
      if (email && password) {
        // Simulate successful login
        console.log('Login successful');
      } else {
        setError('Por favor, preencha todos os campos');
      }
      setIsLoading(false);
    }, 1500);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #00213a 0%, #2a4a6b 50%, #ffffff 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(49, 251, 43, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-30%',
          left: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(49, 251, 43, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            flexWrap: 'wrap',
          }}
        >
          {/* Left side - Branding */}
          <Fade in timeout={1000}>
            <Box
              sx={{
                flex: '1 1 400px',
                maxWidth: '500px',
                color: 'white',
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  mb: 3,
                  background: 'linear-gradient(135deg, #ffffff 0%, #31fb2b 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                }}
              >
                Briefing AI
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: 300,
                  lineHeight: 1.4,
                }}
              >
                Sistema Inteligente de Monitoramento de Notícias e Geração de Briefings para Instagram
              </Typography>

              <Stack spacing={3} sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      p: 1,
                      borderRadius: 2,
                      background: 'rgba(49, 251, 43, 0.2)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <AutoAwesome sx={{ color: '#31fb2b' }} />
                  </Box>
                  <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    IA avançada para análise de tendências
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      p: 1,
                      borderRadius: 2,
                      background: 'rgba(49, 251, 43, 0.2)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <TrendingUp sx={{ color: '#31fb2b' }} />
                  </Box>
                  <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    Monitoramento em tempo real
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      p: 1,
                      borderRadius: 2,
                      background: 'rgba(49, 251, 43, 0.2)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <Speed sx={{ color: '#31fb2b' }} />
                  </Box>
                  <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    Conteúdo otimizado para Instagram
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Fade>

          {/* Right side - Login Form */}
          <Zoom in timeout={1200}>
            <Card
              sx={{
                flex: '1 1 400px',
                maxWidth: '450px',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 33, 58, 0.15)',
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: 'center',
                    mb: 1,
                    color: '#00213a',
                    fontWeight: 700,
                  }}
                >
                  Bem-vindo!
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: 'center',
                    mb: 4,
                    color: '#64748b',
                  }}
                >
                  Faça login para acessar sua dashboard
                </Typography>

                {error && (
                  <Alert severity="error" sx={{ mb: 3 }}>
                    {error}
                  </Alert>
                )}

                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email sx={{ color: '#64748b' }} />
                        </InputAdornment>
                      ),
                    }}
                    placeholder="seu@email.com"
                  />

                  <TextField
                    fullWidth
                    label="Senha"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock sx={{ color: '#64748b' }} />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    placeholder="••••••••"
                  />

                  <Box sx={{ textAlign: 'right' }}>
                    <Link
                      href="#"
                      variant="body2"
                      sx={{
                        color: '#31fb2b',
                        textDecoration: 'none',
                        fontWeight: 500,
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      Esqueceu sua senha?
                    </Link>
                  </Box>

                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    onClick={handleLogin}
                    disabled={isLoading}
                    sx={{
                      py: 2,
                      fontSize: '1rem',
                      background: 'linear-gradient(135deg, #31fb2b 0%, #28d123 100%)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #28d123 0%, #22b01d 100%)',
                      },
                      color: '#00213a',
                      fontWeight: 600,
                    }}
                  >
                    {isLoading ? 'Entrando...' : 'Entrar'}
                  </Button>

                  <Divider sx={{ my: 2 }}>
                    <Typography variant="body2" sx={{ color: '#64748b' }}>
                      ou continue com
                    </Typography>
                  </Divider>

                  <Stack direction="row" spacing={2}>
                    <Button
                      fullWidth
                      variant="outlined"
                      startIcon={<Google />}
                      sx={{
                        py: 1.5,
                        borderColor: '#e2e8f0',
                        color: '#64748b',
                        '&:hover': {
                          borderColor: '#31fb2b',
                          backgroundColor: 'rgba(49, 251, 43, 0.04)',
                        },
                      }}
                    >
                      Google
                    </Button>
                    <Button
                      fullWidth
                      variant="outlined"
                      startIcon={<LinkedIn />}
                      sx={{
                        py: 1.5,
                        borderColor: '#e2e8f0',
                        color: '#64748b',
                        '&:hover': {
                          borderColor: '#31fb2b',
                          backgroundColor: 'rgba(49, 251, 43, 0.04)',
                        },
                      }}
                    >
                      LinkedIn
                    </Button>
                  </Stack>

                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: 'center',
                      color: '#64748b',
                      mt: 3,
                    }}
                  >
                    Não tem uma conta?{' '}
                    <Link
                      href="#"
                      sx={{
                        color: '#31fb2b',
                        textDecoration: 'none',
                        fontWeight: 600,
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      Cadastre-se gratuitamente
                    </Link>
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Zoom>
        </Box>
      </Container>
    </Box>
  );
}