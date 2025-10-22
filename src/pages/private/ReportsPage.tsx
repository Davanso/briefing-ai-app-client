import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from '@mui/material';
import {
  BarChart,
  TrendingUp,
  Assessment,
  Visibility,
  ThumbUp,
} from '@mui/icons-material';

const recentBriefings = [
  {
    id: 1,
    title: 'Tendências de Mercado - Tecnologia 2024',
    date: '2024-03-15',
    views: 1250,
    engagement: '8.5%',
    status: 'published',
  },
  {
    id: 2,
    title: 'Análise Semanal: Inovações em IA',
    date: '2024-03-14',
    views: 890,
    engagement: '6.2%',
    status: 'published',
  },
  {
    id: 3,
    title: 'Review: Produtos Lançados em Março',
    date: '2024-03-13',
    views: 1450,
    engagement: '9.8%',
    status: 'published',
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

export default function ReportsPage() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: '#00213a',
            mb: 1,
          }}
        >
          Relatórios e Analytics
        </Typography>
        <Typography variant="body1" sx={{ color: '#64748b' }}>
          Acompanhe o desempenho dos seus briefings e analise métricas importantes
        </Typography>
      </Box>

      {/* Metrics Cards */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
          gap: 3,
          mb: 4,
        }}
      >
        <Card
          sx={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            border: '1px solid #e2e8f0',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 25px rgba(0, 33, 58, 0.1)',
            },
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: 2,
                  background: '#31fb2b20',
                  color: '#31fb2b',
                  mr: 2,
                }}
              >
                <BarChart />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#00213a' }}>
                Total de Views
              </Typography>
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 700, color: '#00213a', mb: 1 }}>
              45.2K
            </Typography>
            <Typography variant="body2" sx={{ color: '#64748b' }}>
              +12% este mês
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            border: '1px solid #e2e8f0',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 25px rgba(0, 33, 58, 0.1)',
            },
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: 2,
                  background: '#3b82f620',
                  color: '#3b82f6',
                  mr: 2,
                }}
              >
                <ThumbUp />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#00213a' }}>
                Engajamento Médio
              </Typography>
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 700, color: '#00213a', mb: 1 }}>
              8.2%
            </Typography>
            <Typography variant="body2" sx={{ color: '#64748b' }}>
              +1.5% este mês
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            border: '1px solid #e2e8f0',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 25px rgba(0, 33, 58, 0.1)',
            },
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: 2,
                  background: '#f59e0b20',
                  color: '#f59e0b',
                  mr: 2,
                }}
              >
                <TrendingUp />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#00213a' }}>
                Crescimento
              </Typography>
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 700, color: '#00213a', mb: 1 }}>
              +24%
            </Typography>
            <Typography variant="body2" sx={{ color: '#64748b' }}>
              vs. mês anterior
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            border: '1px solid #e2e8f0',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 25px rgba(0, 33, 58, 0.1)',
            },
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: 2,
                  background: '#10b98120',
                  color: '#10b981',
                  mr: 2,
                }}
              >
                <Assessment />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#00213a' }}>
                Taxa de Conversão
              </Typography>
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 700, color: '#00213a', mb: 1 }}>
              5.8%
            </Typography>
            <Typography variant="body2" sx={{ color: '#64748b' }}>
              +0.3% este mês
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' },
          gap: 3,
        }}
      >
        {/* Chart Area */}
        <Paper
          sx={{
            p: 3,
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            border: '1px solid #e2e8f0',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <BarChart sx={{ color: '#31fb2b', mr: 1 }} />
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#00213a' }}>
              Performance dos Briefings (30 dias)
            </Typography>
          </Box>
          <Box
            sx={{
              height: 400,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#f8fafc',
              borderRadius: 2,
              border: '2px dashed #e2e8f0',
            }}
          >
            <Typography variant="body1" sx={{ color: '#64748b' }}>
              Gráfico de performance será implementado aqui
            </Typography>
          </Box>
        </Paper>

        {/* Recent Performance Table */}
        <Paper
          sx={{
            p: 3,
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            border: '1px solid #e2e8f0',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Visibility sx={{ color: '#31fb2b', mr: 1 }} />
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#00213a' }}>
              Top Performers
            </Typography>
          </Box>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Briefing</TableCell>
                  <TableCell align="right">Views</TableCell>
                  <TableCell align="right">Engajamento</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recentBriefings.map((briefing) => (
                  <TableRow key={briefing.id}>
                    <TableCell>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: '#00213a' }}>
                          {briefing.title.length > 30
                            ? `${briefing.title.substring(0, 30)}...`
                            : briefing.title}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                          <Typography variant="caption" sx={{ color: '#64748b' }}>
                            {new Date(briefing.date).toLocaleDateString('pt-BR')}
                          </Typography>
                          <Chip
                            label={getStatusLabel(briefing.status)}
                            size="small"
                            sx={{
                              backgroundColor: `${getStatusColor(briefing.status)}20`,
                              color: getStatusColor(briefing.status),
                              fontSize: '0.7rem',
                              height: 20,
                            }}
                          />
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {briefing.views.toLocaleString()}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="body2" sx={{ fontWeight: 600, color: '#31fb2b' }}>
                        {briefing.engagement}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Container>
  );
}