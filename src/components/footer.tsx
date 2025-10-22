import { Box, Typography, Link, Divider, Container, Stack, IconButton } from '@mui/material';
import { 
  Copyright, 
  Email, 
  Phone, 
  LocationOn,
  LinkedIn,
  GitHub,
  Instagram,
  AutoAwesome,
} from '@mui/icons-material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #00213a 0%, #001529 100%)',
        color: 'white',
        height: '100%',
        width: '100%',
        mt: 'auto',
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            mb: 4,
          }}
        >
          {/* Brand Section */}
          <Box sx={{ flex: { xs: 1, md: 2 } }}>
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #31fb2b 0%, #28d123 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                  }}
                >
                  <AutoAwesome sx={{ color: '#00213a', fontSize: '1.5rem' }} />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#31fb2b' }}>
                  Briefing AI
                </Typography>
              </Box>
              
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 3, lineHeight: 1.6 }}>
                Sistema inteligente de monitoramento de notícias e geração automática de briefings 
                otimizados para Instagram. Transformamos informação em conteúdo engajante.
              </Typography>
              
              <Stack direction="row" spacing={1}>
                <IconButton 
                  component="a"
                  href="https://www.linkedin.com/in/guilherme-destro-davansodev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.7)',
                    '&:hover': { 
                      color: '#31fb2b',
                      backgroundColor: 'rgba(49, 251, 43, 0.1)',
                    }
                  }}
                >
                  <LinkedIn />
                </IconButton>
                <IconButton 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.7)',
                    '&:hover': { 
                      color: '#31fb2b',
                      backgroundColor: 'rgba(49, 251, 43, 0.1)',
                    }
                  }}
                >
                  <Instagram />
                </IconButton>
                <IconButton 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.7)',
                    '&:hover': { 
                      color: '#31fb2b',
                      backgroundColor: 'rgba(49, 251, 43, 0.1)',
                    }
                  }}
                >
                  <GitHub />
                </IconButton>
              </Stack>
            </Box>
          </Box>
          
          {/* Links Sections */}
          <Box 
            sx={{ 
              flex: { xs: 1, md: 3 },
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 4,
            }}
          >
            {/* Product Links */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#31fb2b' }}>
                Produto
              </Typography>
              <Stack spacing={1}>
                <Link 
                  href="#" 
                  variant="body2" 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    '&:hover': { color: '#31fb2b' }
                  }}
                >
                  Home
                </Link>
                <Link 
                  href="#" 
                  variant="body2" 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    '&:hover': { color: '#31fb2b' }
                  }}
                >
                  Links
                </Link>
                <Link 
                  href="#" 
                  variant="body2" 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    '&:hover': { color: '#31fb2b' }
                  }}
                >
                  Briefings
                </Link>
              </Stack>
            </Box>
            
            {/* Contact Info */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#31fb2b' }}>
                Contato
              </Typography>
              <Stack spacing={1.5}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Email sx={{ color: '#31fb2b', fontSize: '1rem' }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    contato@briefingai.com
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Phone sx={{ color: '#31fb2b', fontSize: '1rem' }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    +55 (19) 99880-3240
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LocationOn sx={{ color: '#31fb2b', fontSize: '1rem' }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    Indaiatuba, Brasil
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
        
        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        
        {/* Copyright */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between', 
            alignItems: { xs: 'center', md: 'center' },
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Copyright sx={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)' }} />
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              2025 Briefing AI. Todos os direitos reservados.
            </Typography>
          </Box>
          
          <Typography 
            variant="caption" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.6)',
              textAlign: { xs: 'center', md: 'right' }
            }}
          >
            Versão 2.1.0 • Última atualização: 21/10/2025
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}