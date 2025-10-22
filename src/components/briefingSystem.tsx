import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Chip,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  Alert,
  CircularProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tabs,
  Tab
} from '@mui/material';
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Search as SearchIcon,
  Article as ArticleIcon,
  Instagram as InstagramIcon,
  ExpandMore as ExpandMoreIcon,
  ContentCopy as CopyIcon,
  Link as LinkIcon
} from '@mui/icons-material';

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  url: string;
  publishedAt: string;
  keywords: string[];
}

interface BriefingOutput {
  id: string;
  title: string;
  summary: string;
  instagramAngle: string;
  creativeFormat: string;
  caption: string;
  cta: string;
  hashtags: string[];
  sourceUrl: string;
  generatedAt: string;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function BriefingSystem() {
  const [tabValue, setTabValue] = useState(0);
  const [keywords, setKeywords] = useState<string[]>(['18V', 'ferramentas', 'construção', 'obras']);
  const [newKeyword, setNewKeyword] = useState('');
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [newsItems] = useState<NewsItem[]>([
    {
      id: '1',
      title: 'Baterias 18V ganham espaço em obras residenciais',
      summary: 'Mercado de ferramentas sem fio cresce 35% no último trimestre, nova linha destaca autonomia e segurança',
      source: 'Portal da Construção',
      url: 'https://example.com/news/1',
      publishedAt: '2025-10-21T10:30:00Z',
      keywords: ['18V', 'ferramentas', 'obras']
    },
    {
      id: '2',
      title: 'Segurança em obras: novas normas para ferramentas elétricas',
      summary: 'Regulamentação atualizada exige maior controle sobre uso de equipamentos em canteiros',
      source: 'Revista Construir',
      url: 'https://example.com/news/2',
      publishedAt: '2025-10-21T09:15:00Z',
      keywords: ['segurança', 'ferramentas', 'normas']
    }
  ]);
  
  const [briefings, setBriefings] = useState<BriefingOutput[]>([
    {
      id: '1',
      title: 'Baterias 18V ganham espaço em obras residenciais',
      summary: 'Mercado de ferramentas sem fio cresce 35%; nova linha destaca autonomia e segurança',
      instagramAngle: 'Por que as obras estão trocando o fio pelo 18V?',
      creativeFormat: 'Carrossel 5 cards (dor → tendência → benefício → caso real → CTA)',
      caption: 'Fio pra quê? 🔌➡🔋 As obras estão migrando para 18V por autonomia e segurança. Veja 3 motivos...',
      cta: 'Salve este post e marque quem ainda usa extensão na obra.',
      hashtags: ['#Construção', '#Ferramentas', '#18V', '#Profissional', '#Obra', '#Tendência'],
      sourceUrl: 'https://example.com/news/1',
      generatedAt: '2025-10-21T11:00:00Z'
    }
  ]);

  const handleAddKeyword = () => {
    if (newKeyword.trim() && !keywords.includes(newKeyword.trim())) {
      setKeywords([...keywords, newKeyword.trim()]);
      setNewKeyword('');
    }
  };

  const handleRemoveKeyword = (keywordToRemove: string) => {
    setKeywords(keywords.filter(keyword => keyword !== keywordToRemove));
  };

  const handleStartMonitoring = () => {
    setIsMonitoring(true);
    // Simulate monitoring process
    setTimeout(() => {
      setIsMonitoring(false);
      // Add new news items (simulation)
    }, 3000);
  };

  const generateBriefing = (newsItem: NewsItem) => {
    const newBriefing: BriefingOutput = {
      id: Date.now().toString(),
      title: newsItem.title,
      summary: newsItem.summary,
      instagramAngle: `Por que ${newsItem.keywords[0]} está em alta?`,
      creativeFormat: 'Carrossel 5 cards (problema → solução → benefício → prova social → CTA)',
      caption: `🚀 Tendência alerta! ${newsItem.title.substring(0, 50)}... Veja por que isso importa para você!`,
      cta: 'Salve este post e compartilhe sua opinião nos comentários!',
      hashtags: newsItem.keywords.map(keyword => `#${keyword.charAt(0).toUpperCase() + keyword.slice(1)}`),
      sourceUrl: newsItem.url,
      generatedAt: new Date().toISOString()
    };
    
    setBriefings([newBriefing, ...briefings]);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Box sx={{ width: '100%', p: { xs: 2, md: 4 } }}>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography 
          variant="h3" 
          sx={{ 
            mb: 2, 
            fontWeight: 800,
            background: 'linear-gradient(135deg, #00213a 0%, #31fb2b 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Sistema de Briefing AI
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            color: '#64748b', 
            fontWeight: 400,
            maxWidth: 600,
            mx: 'auto',
          }}
        >
          Transforme notícias em conteúdo engajante para Instagram com inteligência artificial
        </Typography>
      </Box>

      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(49, 251, 43, 0.03) 0%, rgba(0, 33, 58, 0.03) 100%)',
          borderRadius: 4,
          p: 2,
          mb: 4,
        }}
      >
        <Tabs 
          value={tabValue} 
          onChange={(_, newValue) => setTabValue(newValue)} 
          sx={{ 
            mb: 3,
            '& .MuiTabs-flexContainer': {
              gap: 2,
            },
          }}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab 
            label="Monitoramento" 
            icon={<SearchIcon />} 
            iconPosition="start"
            sx={{
              minHeight: 56,
              borderRadius: 3,
              mx: 0.5,
              '&.Mui-selected': {
                backgroundColor: 'rgba(49, 251, 43, 0.12)',
                color: '#00213a',
              },
            }}
          />
          <Tab 
            label="Notícias Filtradas" 
            icon={<ArticleIcon />} 
            iconPosition="start"
            sx={{
              minHeight: 56,
              borderRadius: 3,
              mx: 0.5,
              '&.Mui-selected': {
                backgroundColor: 'rgba(49, 251, 43, 0.12)',
                color: '#00213a',
              },
            }}
          />
          <Tab 
            label="Briefings Gerados" 
            icon={<InstagramIcon />} 
            iconPosition="start"
            sx={{
              minHeight: 56,
              borderRadius: 3,
              mx: 0.5,
              '&.Mui-selected': {
                backgroundColor: 'rgba(49, 251, 43, 0.12)',
                color: '#00213a',
              },
            }}
          />
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
        <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          <Box sx={{ flex: '1 1 400px', minWidth: '300px' }}>
            <Card
              sx={{
                background: 'linear-gradient(135deg, #ffffff 0%, #fafbfc 100%)',
                border: '2px solid rgba(49, 251, 43, 0.2)',
                position: 'relative',
                overflow: 'visible',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: -8,
                  left: 24,
                  background: 'linear-gradient(135deg, #31fb2b 0%, #28d123 100%)',
                  color: '#00213a',
                  px: 3,
                  py: 1,
                  borderRadius: 2,
                  fontWeight: 600,
                  fontSize: '0.875rem',
                }}
              >
                📝 Configuração
              </Box>
              <CardContent sx={{ pt: 4 }}>
                <Typography variant="h6" gutterBottom sx={{ color: '#00213a', fontWeight: 600 }}>
                  Palavras-chave para Monitoramento
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                  <TextField
                    size="small"
                    placeholder="Nova palavra-chave"
                    value={newKeyword}
                    onChange={(e) => setNewKeyword(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddKeyword()}
                    sx={{ flex: 1 }}
                  />
                  <Button 
                    variant="contained" 
                    onClick={handleAddKeyword} 
                    startIcon={<AddIcon />}
                    sx={{
                      background: 'linear-gradient(135deg, #31fb2b 0%, #28d123 100%)',
                      color: '#00213a',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #28d123 0%, #22b01d 100%)',
                      },
                    }}
                  >
                    Adicionar
                  </Button>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {keywords.map((keyword) => (
                    <Chip
                      key={keyword}
                      label={keyword}
                      onDelete={() => handleRemoveKeyword(keyword)}
                      deleteIcon={<DeleteIcon />}
                      sx={{
                        backgroundColor: 'rgba(49, 251, 43, 0.12)',
                        color: '#00213a',
                        border: '1px solid rgba(49, 251, 43, 0.3)',
                        fontWeight: 500,
                        '&:hover': {
                          backgroundColor: 'rgba(49, 251, 43, 0.2)',
                        },
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ flex: '1 1 400px', minWidth: '300px' }}>
            <Card
              sx={{
                background: 'linear-gradient(135deg, #ffffff 0%, #fafbfc 100%)',
                border: '2px solid rgba(0, 33, 58, 0.2)',
                position: 'relative',
                overflow: 'visible',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: -8,
                  left: 24,
                  background: 'linear-gradient(135deg, #00213a 0%, #2a4a6b 100%)',
                  color: 'white',
                  px: 3,
                  py: 1,
                  borderRadius: 2,
                  fontWeight: 600,
                  fontSize: '0.875rem',
                }}
              >
                ⚡ Status
              </Box>
              <CardContent sx={{ pt: 4 }}>
                <Typography variant="h6" gutterBottom sx={{ color: '#00213a', fontWeight: 600 }}>
                  Status do Monitoramento
                </Typography>
                
                <Alert 
                  severity={isMonitoring ? "info" : "success"} 
                  sx={{ 
                    mb: 3,
                    backgroundColor: isMonitoring ? 'rgba(0, 33, 58, 0.08)' : 'rgba(49, 251, 43, 0.08)',
                    borderColor: isMonitoring ? 'rgba(0, 33, 58, 0.2)' : 'rgba(49, 251, 43, 0.2)',
                    color: '#00213a',
                  }}
                >
                  {isMonitoring ? "🔍 Monitorando fontes de notícias..." : "✅ Sistema pronto para monitoramento"}
                </Alert>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleStartMonitoring}
                  disabled={isMonitoring}
                  startIcon={isMonitoring ? <CircularProgress size={20} color="inherit" /> : <SearchIcon />}
                  fullWidth
                  size="large"
                  sx={{
                    py: 2,
                    fontSize: '1rem',
                    fontWeight: 600,
                  }}
                >
                  {isMonitoring ? "Monitorando..." : "🚀 Iniciar Monitoramento"}
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, color: '#00213a' }}>
            📰 Notícias Filtradas
          </Typography>
          <Chip 
            label={`${newsItems.length} notícias`} 
            size="small"
            sx={{
              backgroundColor: 'rgba(49, 251, 43, 0.12)',
              color: '#00213a',
              fontWeight: 600,
            }}
          />
        </Box>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {newsItems.map((news) => (
            <Card 
              key={news.id}
              sx={{
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(0, 33, 58, 0.15)',
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 3 }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      flexGrow: 1, 
                      color: '#00213a',
                      fontWeight: 600,
                      lineHeight: 1.4,
                      pr: 2,
                    }}
                  >
                    {news.title}
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => generateBriefing(news)}
                    startIcon={<InstagramIcon />}
                    sx={{
                      background: 'linear-gradient(135deg, #31fb2b 0%, #28d123 100%)',
                      color: '#00213a',
                      minWidth: 180,
                      '&:hover': {
                        background: 'linear-gradient(135deg, #28d123 0%, #22b01d 100%)',
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    Gerar Briefing
                  </Button>
                </Box>
                
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 3, 
                    color: '#64748b',
                    lineHeight: 1.6,
                  }}
                >
                  {news.summary}
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap' }}>
                  {news.keywords.map((keyword) => (
                    <Chip 
                      key={keyword} 
                      label={keyword} 
                      size="small" 
                      sx={{
                        backgroundColor: 'rgba(0, 33, 58, 0.08)',
                        color: '#00213a',
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </Box>
                
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    pt: 2,
                    borderTop: '1px solid #e2e8f0',
                  }}
                >
                  <Typography variant="body2" sx={{ color: '#64748b', fontWeight: 500 }}>
                    📍 {news.source}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b' }}>
                    🕒 {new Date(news.publishedAt).toLocaleDateString('pt-BR')}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, color: '#00213a' }}>
            🎨 Briefings para Instagram
          </Typography>
          <Chip 
            label={`${briefings.length} briefings`} 
            size="small"
            sx={{
              backgroundColor: 'rgba(233, 30, 99, 0.12)',
              color: '#e91e63',
              fontWeight: 600,
            }}
          />
        </Box>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {briefings.map((briefing) => (
            <Card 
              key={briefing.id}
              sx={{
                background: 'linear-gradient(135deg, #ffffff 0%, #fafbfc 100%)',
                border: '2px solid rgba(233, 30, 99, 0.1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(233, 30, 99, 0.15)',
                  borderColor: 'rgba(233, 30, 99, 0.3)',
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 3,
                      background: 'linear-gradient(135deg, #e91e63 0%, #ad1457 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <InstagramIcon sx={{ color: 'white', fontSize: '1.5rem' }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ color: '#00213a', fontWeight: 600, mb: 1 }}>
                      {briefing.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#64748b' }}>
                      Gerado em: {new Date(briefing.generatedAt).toLocaleString('pt-BR')}
                    </Typography>
                  </Box>
                </Box>
                
                <Accordion
                  sx={{
                    boxShadow: 'none',
                    border: '1px solid #e2e8f0',
                    borderRadius: 3,
                    '&:before': { display: 'none' },
                  }}
                >
                  <AccordionSummary 
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                      backgroundColor: 'rgba(233, 30, 99, 0.04)',
                      borderRadius: '12px 12px 0 0',
                      '&.Mui-expanded': {
                        borderRadius: '12px 12px 0 0',
                      },
                    }}
                  >
                    <Typography variant="h6" sx={{ color: '#00213a', fontWeight: 600 }}>
                      📝 Detalhes do Briefing
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ p: 0 }}>
                    <List disablePadding>
                      <ListItem sx={{ px: 3, py: 2 }}>
                        <ListItemText
                          primary={
                            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#00213a' }}>
                              💡 Resumo
                            </Typography>
                          }
                          secondary={
                            <Typography variant="body2" sx={{ mt: 1, color: '#64748b', lineHeight: 1.6 }}>
                              {briefing.summary}
                            </Typography>
                          }
                        />
                        <IconButton 
                          onClick={() => copyToClipboard(briefing.summary)}
                          sx={{ 
                            color: '#31fb2b',
                            '&:hover': { backgroundColor: 'rgba(49, 251, 43, 0.08)' }
                          }}
                        >
                          <CopyIcon />
                        </IconButton>
                      </ListItem>
                      <Divider />
                      
                      <ListItem sx={{ px: 3, py: 2 }}>
                        <ListItemText
                          primary={
                            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#00213a' }}>
                              🎯 Ângulo para Instagram
                            </Typography>
                          }
                          secondary={
                            <Typography variant="body2" sx={{ mt: 1, color: '#64748b', lineHeight: 1.6 }}>
                              {briefing.instagramAngle}
                            </Typography>
                          }
                        />
                        <IconButton 
                          onClick={() => copyToClipboard(briefing.instagramAngle)}
                          sx={{ 
                            color: '#31fb2b',
                            '&:hover': { backgroundColor: 'rgba(49, 251, 43, 0.08)' }
                          }}
                        >
                          <CopyIcon />
                        </IconButton>
                      </ListItem>
                      <Divider />
                      
                      <ListItem sx={{ px: 3, py: 2 }}>
                        <ListItemText
                          primary={
                            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#00213a' }}>
                              🎨 Formato Criativo
                            </Typography>
                          }
                          secondary={
                            <Typography variant="body2" sx={{ mt: 1, color: '#64748b', lineHeight: 1.6 }}>
                              {briefing.creativeFormat}
                            </Typography>
                          }
                        />
                        <IconButton 
                          onClick={() => copyToClipboard(briefing.creativeFormat)}
                          sx={{ 
                            color: '#31fb2b',
                            '&:hover': { backgroundColor: 'rgba(49, 251, 43, 0.08)' }
                          }}
                        >
                          <CopyIcon />
                        </IconButton>
                      </ListItem>
                      <Divider />
                      
                      <ListItem sx={{ px: 3, py: 2 }}>
                        <ListItemText
                          primary={
                            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#00213a' }}>
                              📝 Legenda
                            </Typography>
                          }
                          secondary={
                            <Typography variant="body2" sx={{ mt: 1, color: '#64748b', lineHeight: 1.6 }}>
                              {briefing.caption}
                            </Typography>
                          }
                        />
                        <IconButton 
                          onClick={() => copyToClipboard(briefing.caption)}
                          sx={{ 
                            color: '#31fb2b',
                            '&:hover': { backgroundColor: 'rgba(49, 251, 43, 0.08)' }
                          }}
                        >
                          <CopyIcon />
                        </IconButton>
                      </ListItem>
                      <Divider />
                      
                      <ListItem sx={{ px: 3, py: 2 }}>
                        <ListItemText
                          primary={
                            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#00213a' }}>
                              🚀 Call to Action
                            </Typography>
                          }
                          secondary={
                            <Typography variant="body2" sx={{ mt: 1, color: '#64748b', lineHeight: 1.6 }}>
                              {briefing.cta}
                            </Typography>
                          }
                        />
                        <IconButton 
                          onClick={() => copyToClipboard(briefing.cta)}
                          sx={{ 
                            color: '#31fb2b',
                            '&:hover': { backgroundColor: 'rgba(49, 251, 43, 0.08)' }
                          }}
                        >
                          <CopyIcon />
                        </IconButton>
                      </ListItem>
                      <Divider />
                      
                      <ListItem sx={{ px: 3, py: 2 }}>
                        <ListItemText
                          primary={
                            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#00213a' }}>
                              #️⃣ Hashtags
                            </Typography>
                          }
                          secondary={
                            <Box sx={{ mt: 2 }}>
                              {briefing.hashtags.map((tag) => (
                                <Chip 
                                  key={tag} 
                                  label={tag} 
                                  size="small" 
                                  sx={{ 
                                    mr: 0.5, 
                                    mb: 0.5,
                                    backgroundColor: 'rgba(233, 30, 99, 0.08)',
                                    color: '#e91e63',
                                    fontWeight: 500,
                                  }} 
                                />
                              ))}
                            </Box>
                          }
                        />
                        <IconButton 
                          onClick={() => copyToClipboard(briefing.hashtags.join(' '))}
                          sx={{ 
                            color: '#31fb2b',
                            '&:hover': { backgroundColor: 'rgba(49, 251, 43, 0.08)' }
                          }}
                        >
                          <CopyIcon />
                        </IconButton>
                      </ListItem>
                      <Divider />
                      
                      <ListItem sx={{ px: 3, py: 2 }}>
                        <ListItemText
                          primary={
                            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#00213a' }}>
                              🔗 Fonte
                            </Typography>
                          }
                          secondary={
                            <Button
                              startIcon={<LinkIcon />}
                              href={briefing.sourceUrl}
                              target="_blank"
                              sx={{ 
                                mt: 1,
                                color: '#31fb2b',
                                '&:hover': { backgroundColor: 'rgba(49, 251, 43, 0.08)' }
                              }}
                            >
                              Ver matéria original
                            </Button>
                          }
                        />
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </Box>
      </TabPanel>
    </Box>
  );
}