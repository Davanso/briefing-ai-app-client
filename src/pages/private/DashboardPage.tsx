import React from 'react';
import { Box, Container, Typography, Card, CardContent, Paper } from '@mui/material';
import {
  TrendingUp,
  Article,
  Visibility,
  ThumbUp,
  Speed,
  Assessment,
} from '@mui/icons-material';

const DashboardCard: React.FC<{
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
  subtitle?: string;
}> = ({ title, value, icon, color, subtitle }) => (
  <Card
    sx={{
      height: '100%',
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
            background: `${color}20`,
            color: color,
            mr: 2,
          }}
        >
          {icon}
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#00213a' }}>
          {title}
        </Typography>
      </Box>
      <Typography variant="h3" sx={{ fontWeight: 700, color: '#00213a', mb: 1 }}>
        {value}
      </Typography>
      {subtitle && (
        <Typography variant="body2" sx={{ color: '#64748b' }}>
          {subtitle}
        </Typography>
      )}
    </CardContent>
  </Card>
);

export default function DashboardPage() {
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
          Dashboard
        </Typography>
        <Typography variant="body1" sx={{ color: '#64748b' }}>
          Visão geral do seu sistema de briefings
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
          gap: 3,
          mb: 4,
        }}
      >
        <DashboardCard
          title="Briefings Criados"
          value="142"
          icon={<Article />}
          color="#31fb2b"
          subtitle="Este mês"
        />
        <DashboardCard
          title="Engajamento"
          value="89%"
          icon={<ThumbUp />}
          color="#3b82f6"
          subtitle="Taxa média"
        />
        <DashboardCard
          title="Visualizações"
          value="12.4K"
          icon={<Visibility />}
          color="#f59e0b"
          subtitle="Total"
        />
        <DashboardCard
          title="Performance"
          value="95%"
          icon={<Speed />}
          color="#10b981"
          subtitle="Sistema"
        />
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' },
          gap: 3,
        }}
      >
        <Paper
          sx={{
            p: 3,
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            border: '1px solid #e2e8f0',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <TrendingUp sx={{ color: '#31fb2b', mr: 1 }} />
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#00213a' }}>
              Tendências de Engajamento
            </Typography>
          </Box>
          <Box
            sx={{
              height: 300,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#f8fafc',
              borderRadius: 2,
              border: '2px dashed #e2e8f0',
            }}
          >
            <Typography variant="body1" sx={{ color: '#64748b' }}>
              Gráfico de tendências será implementado aqui
            </Typography>
          </Box>
        </Paper>
        <Paper
          sx={{
            p: 3,
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            border: '1px solid #e2e8f0',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Assessment sx={{ color: '#31fb2b', mr: 1 }} />
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#00213a' }}>
              Atividade Recente
            </Typography>
          </Box>
          <Box
            sx={{
              height: 300,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#f8fafc',
              borderRadius: 2,
              border: '2px dashed #e2e8f0',
            }}
          >
            <Typography variant="body1" sx={{ color: '#64748b' }}>
              Lista de atividades será implementada aqui
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}