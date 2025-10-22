import React from 'react';
import { Box, Container, Typography, Card, CardContent, Chip, Button } from '@mui/material';
import { Add, Edit, Visibility, Delete } from '@mui/icons-material';

interface Briefing {
  id: number;
  title: string;
  date: string;
  status: 'draft' | 'published' | 'scheduled';
  views: number;
  engagement: string;
}

const mockBriefings: Briefing[] = [
  {
    id: 1,
    title: 'Tendências de Mercado - Tecnologia 2024',
    date: '2024-03-15',
    status: 'published',
    views: 1250,
    engagement: '8.5%',
  },
  {
    id: 2,
    title: 'Análise Semanal: Inovações em IA',
    date: '2024-03-14',
    status: 'draft',
    views: 0,
    engagement: '0%',
  },
  {
    id: 3,
    title: 'Review: Produtos Lançados em Março',
    date: '2024-03-13',
    status: 'scheduled',
    views: 0,
    engagement: '0%',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'published':
      return '#10b981';
    case 'draft':
      return '#64748b';
    case 'scheduled':
      return '#f59e0b';
    default:
      return '#64748b';
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'published':
      return 'Publicado';
    case 'draft':
      return 'Rascunho';
    case 'scheduled':
      return 'Agendado';
    default:
      return 'Desconhecido';
  }
};

export default function BriefingsPage() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: '#00213a',
              mb: 1,
            }}
          >
            Meus Briefings
          </Typography>
          <Typography variant="body1" sx={{ color: '#64748b' }}>
            Gerencie todos os seus briefings criados
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<Add />}
          sx={{
            background: 'linear-gradient(135deg, #31fb2b 0%, #28d123 100%)',
            color: '#00213a',
            fontWeight: 600,
            '&:hover': {
              background: 'linear-gradient(135deg, #28d123 0%, #22b01d 100%)',
            },
          }}
        >
          Novo Briefing
        </Button>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gap: 3,
        }}
      >
        {mockBriefings.map((briefing) => (
          <Card
            key={briefing.id}
            sx={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              border: '1px solid #e2e8f0',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(0, 33, 58, 0.1)',
              },
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: '#00213a',
                      mb: 1,
                    }}
                  >
                    {briefing.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b', mb: 2 }}>
                    Criado em {new Date(briefing.date).toLocaleDateString('pt-BR')}
                  </Typography>
                  <Chip
                    label={getStatusLabel(briefing.status)}
                    sx={{
                      backgroundColor: `${getStatusColor(briefing.status)}20`,
                      color: getStatusColor(briefing.status),
                      fontWeight: 600,
                    }}
                  />
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<Visibility />}
                    sx={{
                      borderColor: '#e2e8f0',
                      color: '#64748b',
                      '&:hover': {
                        borderColor: '#31fb2b',
                        backgroundColor: 'rgba(49, 251, 43, 0.04)',
                      },
                    }}
                  >
                    Ver
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<Edit />}
                    sx={{
                      borderColor: '#e2e8f0',
                      color: '#64748b',
                      '&:hover': {
                        borderColor: '#31fb2b',
                        backgroundColor: 'rgba(49, 251, 43, 0.04)',
                      },
                    }}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<Delete />}
                    sx={{
                      borderColor: '#e2e8f0',
                      color: '#ef4444',
                      '&:hover': {
                        borderColor: '#ef4444',
                        backgroundColor: 'rgba(239, 68, 68, 0.04)',
                      },
                    }}
                  >
                    Excluir
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                  gap: 2,
                  pt: 2,
                  borderTop: '1px solid #e2e8f0',
                }}
              >
                <Box>
                  <Typography variant="body2" sx={{ color: '#64748b', mb: 0.5 }}>
                    Visualizações
                  </Typography>
                  <Typography variant="h6" sx={{ color: '#00213a', fontWeight: 600 }}>
                    {briefing.views.toLocaleString()}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: '#64748b', mb: 0.5 }}>
                    Engajamento
                  </Typography>
                  <Typography variant="h6" sx={{ color: '#00213a', fontWeight: 600 }}>
                    {briefing.engagement}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}