import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
  TextField,
  InputAdornment,
  Paper,
  Avatar,
} from '@mui/material';
import {
  Search,
  TrendingUp,
  AccessTime,
  Visibility,
  Bookmark,
  Share,
  FilterList,
} from '@mui/icons-material';

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  source: string;
  publishedAt: string;
  category: string;
  trending: boolean;
  views: number;
  image?: string;
}

const mockNews: NewsItem[] = [
  {
    id: 1,
    title: 'OpenAI Lança Nova Versão do ChatGPT com Capacidades Avançadas',
    summary: 'A nova versão inclui melhorias significativas na compreensão de contexto e capacidades multimodais expandidas.',
    source: 'TechCrunch',
    publishedAt: '2024-03-15T10:30:00Z',
    category: 'Inteligência Artificial',
    trending: true,
    views: 2340,
  },
  {
    id: 2,
    title: 'Meta Anuncia Investimento de $10 Bilhões em Realidade Virtual',
    summary: 'O investimento visa acelerar o desenvolvimento do metaverso e tecnologias imersivas.',
    source: 'The Verge',
    publishedAt: '2024-03-15T08:15:00Z',
    category: 'Tecnologia',
    trending: true,
    views: 1890,
  },
  {
    id: 3,
    title: 'Tesla Revela Novas Funcionalidades de Direção Autônoma',
    summary: 'As atualizações incluem melhor reconhecimento de objetos e navegação em ambientes complexos.',
    source: 'Electrek',
    publishedAt: '2024-03-14T16:45:00Z',
    category: 'Automobilismo',
    trending: false,
    views: 1245,
  },
  {
    id: 4,
    title: 'Microsoft Integra IA Generativa em Todos os Produtos Office',
    summary: 'A integração promete transformar a produtividade corporativa com assistentes inteligentes.',
    source: 'Microsoft Blog',
    publishedAt: '2024-03-14T14:20:00Z',
    category: 'Produtividade',
    trending: false,
    views: 987,
  },
  {
    id: 5,
    title: 'Google Anuncia Breakthrough em Computação Quântica',
    summary: 'Novo processador quântico promete resolver problemas complexos em segundos.',
    source: 'Nature',
    publishedAt: '2024-03-14T11:30:00Z',
    category: 'Ciência',
    trending: true,
    views: 3456,
  },
];

const categories = ['Todas', 'Inteligência Artificial', 'Tecnologia', 'Automobilismo', 'Produtividade', 'Ciência'];

const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    'Inteligência Artificial': '#31fb2b',
    'Tecnologia': '#3b82f6',
    'Automobilismo': '#f59e0b',
    'Produtividade': '#8b5cf6',
    'Ciência': '#10b981',
  };
  return colors[category] || '#64748b';
};

const formatTimeAgo = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
  
  if (diffInHours < 1) return 'Agora mesmo';
  if (diffInHours < 24) return `${diffInHours}h atrás`;
  return `${Math.floor(diffInHours / 24)}d atrás`;
};

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const filteredNews = mockNews.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todas' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
          Monitoramento de Notícias
        </Typography>
        <Typography variant="body1" sx={{ color: '#64748b' }}>
          Acompanhe as últimas tendências e notícias relevantes para seus briefings
        </Typography>
      </Box>

      {/* Search and Filters */}
      <Paper
        sx={{
          p: 3,
          mb: 4,
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          border: '1px solid #e2e8f0',
        }}
      >
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
          <TextField
            placeholder="Pesquisar notícias..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ flex: 1, minWidth: 300 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: '#64748b' }} />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="outlined"
            startIcon={<FilterList />}
            sx={{
              borderColor: '#e2e8f0',
              color: '#64748b',
              '&:hover': {
                borderColor: '#31fb2b',
                backgroundColor: 'rgba(49, 251, 43, 0.04)',
              },
            }}
          >
            Filtros
          </Button>
        </Box>

        {/* Category Filters */}
        <Box sx={{ display: 'flex', gap: 1, mt: 3, flexWrap: 'wrap' }}>
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'filled' : 'outlined'}
              sx={{
                backgroundColor: selectedCategory === category ? '#31fb2b' : 'transparent',
                color: selectedCategory === category ? '#00213a' : '#64748b',
                borderColor: selectedCategory === category ? '#31fb2b' : '#e2e8f0',
                fontWeight: selectedCategory === category ? 600 : 400,
                '&:hover': {
                  backgroundColor: selectedCategory === category ? '#28d123' : 'rgba(49, 251, 43, 0.04)',
                },
              }}
            />
          ))}
        </Box>
      </Paper>

      {/* News Grid */}
      <Box
        sx={{
          display: 'grid',
          gap: 3,
        }}
      >
        {filteredNews.map((newsItem) => (
          <Card
            key={newsItem.id}
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
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Chip
                      label={newsItem.category}
                      size="small"
                      sx={{
                        backgroundColor: `${getCategoryColor(newsItem.category)}20`,
                        color: getCategoryColor(newsItem.category),
                        fontWeight: 600,
                      }}
                    />
                    {newsItem.trending && (
                      <Chip
                        label="Trending"
                        size="small"
                        icon={<TrendingUp />}
                        sx={{
                          backgroundColor: '#ff474720',
                          color: '#ff4747',
                          fontWeight: 600,
                        }}
                      />
                    )}
                  </Box>
                  
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: '#00213a',
                      mb: 1,
                      cursor: 'pointer',
                      '&:hover': {
                        color: '#31fb2b',
                      },
                    }}
                  >
                    {newsItem.title}
                  </Typography>
                  
                  <Typography variant="body2" sx={{ color: '#64748b', mb: 2, lineHeight: 1.6 }}>
                    {newsItem.summary}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Avatar
                        sx={{
                          width: 24,
                          height: 24,
                          fontSize: '0.75rem',
                          background: 'linear-gradient(135deg, #00213a 0%, #31fb2b 100%)',
                        }}
                      >
                        {newsItem.source.charAt(0)}
                      </Avatar>
                      <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 500 }}>
                        {newsItem.source}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <AccessTime sx={{ fontSize: '0.875rem', color: '#64748b' }} />
                      <Typography variant="caption" sx={{ color: '#64748b' }}>
                        {formatTimeAgo(newsItem.publishedAt)}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Visibility sx={{ fontSize: '0.875rem', color: '#64748b' }} />
                      <Typography variant="caption" sx={{ color: '#64748b' }}>
                        {newsItem.views.toLocaleString()}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', gap: 1, ml: 2 }}>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<Bookmark />}
                    sx={{
                      borderColor: '#e2e8f0',
                      color: '#64748b',
                      '&:hover': {
                        borderColor: '#31fb2b',
                        backgroundColor: 'rgba(49, 251, 43, 0.04)',
                      },
                    }}
                  >
                    Salvar
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<Share />}
                    sx={{
                      borderColor: '#e2e8f0',
                      color: '#64748b',
                      '&:hover': {
                        borderColor: '#31fb2b',
                        backgroundColor: 'rgba(49, 251, 43, 0.04)',
                      },
                    }}
                  >
                    Compartilhar
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      {filteredNews.length === 0 && (
        <Paper
          sx={{
            p: 4,
            textAlign: 'center',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            border: '1px solid #e2e8f0',
          }}
        >
          <Typography variant="h6" sx={{ color: '#64748b', mb: 1 }}>
            Nenhuma notícia encontrada
          </Typography>
          <Typography variant="body2" sx={{ color: '#64748b' }}>
            Tente ajustar seus filtros ou termo de pesquisa
          </Typography>
        </Paper>
      )}
    </Container>
  );
}