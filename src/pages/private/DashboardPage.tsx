import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  IconButton,
  Chip,
  Alert,
  CircularProgress,
  Divider,
  Stack,
} from '@mui/material';
import {
  Add,
  Delete,
  Link as LinkIcon,
  AutoAwesome,
  ContentCopy,
  Download,
  Clear,
} from '@mui/icons-material';

export default function DashboardPage() {
  const [links, setLinks] = useState<string[]>(['']);
  const [generatedBriefing, setGeneratedBriefing] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');

  const addLinkField = () => {
    setLinks([...links, '']);
  };

  const removeLinkField = (index: number) => {
    if (links.length > 1) {
      const newLinks = links.filter((_, i) => i !== index);
      setLinks(newLinks);
    }
  };

  const updateLink = (index: number, value: string) => {
    const newLinks = [...links];
    newLinks[index] = value;
    setLinks(newLinks);
  };

  const clearAllLinks = () => {
    setLinks(['']);
    setGeneratedBriefing('');
    setError('');
  };

  const generateBriefing = async () => {
    const validLinks = links.filter(link => link.trim() !== '');
    
    if (validLinks.length === 0) {
      setError('Por favor, adicione pelo menos um link válido');
      return;
    }

    setIsGenerating(true);
    setError('');
    setGeneratedBriefing('');

    try {
      // Simulate API call for briefing generation
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Mock generated briefing for Instagram
      const mockBriefing = `🚀 BRIEFING TECH | ${new Date().toLocaleDateString('pt-BR')}

💡 O QUE ESTÁ BOMBANDO NO MUNDO TECH?

🔥 TENDÊNCIAS QUE VOCÊ PRECISA SABER:

✨ IA GENERATIVA em alta!
→ Novas ferramentas revolucionando o mercado
→ Automação chegando em TODOS os setores
→ Oportunidades INFINITAS para quem souber usar

📱 TRANSFORMAÇÃO DIGITAL acelerada
→ Empresas investindo PESADO em tech
→ Remote work virou realidade permanente
→ Cloud computing dominando tudo

🎯 EXPERIÊNCIA DO USUÁRIO em foco
→ Interfaces cada vez mais intuitivas
→ Personalização é a palavra de ordem
→ UX/UI designers são os novos rockstars

💰 OPORTUNIDADES DE INVESTIMENTO:
• Startups de IA → 📈 Crescimento exponencial
• EdTech → 🎓 Educação do futuro
• FinTech → 💳 Revolução financeira
• HealthTech → 🏥 Saúde 4.0

⚡ DICA DE OURO:
"Quem não se adapta à tecnologia, fica para trás. O futuro é AGORA!"

🎯 PRÓXIMOS PASSOS:
✅ Acompanhe as tendências
✅ Invista em capacitação
✅ Teste novas ferramentas
✅ Network com especialistas

📊 DADOS QUE IMPRESSIONAM:
• 85% das empresas vão usar IA até 2025
• Mercado tech cresce 15% ao ano
• 2.4 bilhões de pessoas usam redes sociais

👀 FIQUE DE OLHO EM:
→ ChatGPT e concorrentes
→ Realidade Virtual/Aumentada
→ Blockchain além das cryptos
→ Computação quântica

💬 O que você acha dessas tendências? Comenta aí!

#TechTrends #IA #InovaçãoTech #FuturoDigital #TransformaçãoDigital #Tecnologia2024 #StartupLife #DigitalMarketing #TechNews #Inovação #Empreendedorismo #TechBrasil #FinTech #EdTech #HealthTech #UXDesign #CloudComputing #Automação #InteligênciaArtificial #RedesSociais

🔗 Salva esse post e compartilha com quem precisa saber!`;
      
      setGeneratedBriefing(mockBriefing);
    } catch (err) {
      setError('Erro ao gerar briefing. Tente novamente.');
    } finally {
      setIsGenerating(false);
    }
  };

  const copyBriefing = () => {
    navigator.clipboard.writeText(generatedBriefing);
  };

  const downloadBriefing = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedBriefing], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `briefing-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

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
          Gerador de Briefings
        </Typography>
        <Typography variant="body1" sx={{ color: '#64748b' }}>
          Adicione links de fontes de notícias e gere briefings automaticamente
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
          gap: 3,
        }}
      >
        {/* Input Section */}
        <Paper
          sx={{
            p: 3,
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            border: '1px solid #e2e8f0',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <LinkIcon sx={{ color: '#31fb2b', mr: 1 }} />
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#00213a' }}>
              Fontes de Notícias
            </Typography>
          </Box>

          <Typography variant="body2" sx={{ color: '#64748b', mb: 3 }}>
            Cole os links das notícias que você deseja incluir no briefing
          </Typography>

          <Stack spacing={2} sx={{ mb: 3 }}>
            {links.map((link, index) => (
              <Box key={index} sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <TextField
                  fullWidth
                  placeholder={`Link ${index + 1} - Ex: https://techcrunch.com/article...`}
                  value={link}
                  onChange={(e) => updateLink(index, e.target.value)}
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <Chip
                        label={index + 1}
                        size="small"
                        sx={{
                          mr: 1,
                          backgroundColor: '#31fb2b20',
                          color: '#31fb2b',
                          fontWeight: 600,
                        }}
                      />
                    ),
                  }}
                />
                {links.length > 1 && (
                  <IconButton
                    onClick={() => removeLinkField(index)}
                    size="small"
                    sx={{
                      color: '#ef4444',
                      '&:hover': {
                        backgroundColor: 'rgba(239, 68, 68, 0.08)',
                      },
                    }}
                  >
                    <Delete />
                  </IconButton>
                )}
              </Box>
            ))}
          </Stack>

          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Button
              variant="outlined"
              startIcon={<Add />}
              onClick={addLinkField}
              sx={{
                borderColor: '#e2e8f0',
                color: '#64748b',
                '&:hover': {
                  borderColor: '#31fb2b',
                  backgroundColor: 'rgba(49, 251, 43, 0.04)',
                },
              }}
            >
              Adicionar Link
            </Button>
            <Button
              variant="outlined"
              startIcon={<Clear />}
              onClick={clearAllLinks}
              sx={{
                borderColor: '#e2e8f0',
                color: '#64748b',
                '&:hover': {
                  borderColor: '#ef4444',
                  backgroundColor: 'rgba(239, 68, 68, 0.04)',
                  color: '#ef4444',
                },
              }}
            >
              Limpar Tudo
            </Button>
          </Box>

          <Divider sx={{ my: 3 }} />

          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          <Button
            fullWidth
            variant="contained"
            size="large"
            startIcon={isGenerating ? <CircularProgress size={20} color="inherit" /> : <AutoAwesome />}
            onClick={generateBriefing}
            disabled={isGenerating}
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
            {isGenerating ? 'Gerando Briefing...' : 'Gerar Briefing'}
          </Button>
        </Paper>

        {/* Output Section */}
        <Paper
          sx={{
            p: 3,
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            border: '1px solid #e2e8f0',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AutoAwesome sx={{ color: '#31fb2b', mr: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#00213a' }}>
                Briefing Gerado
              </Typography>
            </Box>
            {generatedBriefing && (
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton
                  onClick={copyBriefing}
                  size="small"
                  sx={{
                    color: '#64748b',
                    '&:hover': {
                      backgroundColor: 'rgba(49, 251, 43, 0.08)',
                      color: '#31fb2b',
                    },
                  }}
                >
                  <ContentCopy />
                </IconButton>
                <IconButton
                  onClick={downloadBriefing}
                  size="small"
                  sx={{
                    color: '#64748b',
                    '&:hover': {
                      backgroundColor: 'rgba(49, 251, 43, 0.08)',
                      color: '#31fb2b',
                    },
                  }}
                >
                  <Download />
                </IconButton>
              </Box>
            )}
          </Box>

          {!generatedBriefing && !isGenerating && (
            <Box
              sx={{
                height: 400,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#f8fafc',
                borderRadius: 2,
                border: '2px dashed #e2e8f0',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <AutoAwesome sx={{ fontSize: 48, color: '#e2e8f0' }} />
              <Typography variant="body1" sx={{ color: '#64748b', textAlign: 'center' }}>
                Seu briefing aparecerá aqui após a geração
              </Typography>
              <Typography variant="body2" sx={{ color: '#94a3b8', textAlign: 'center' }}>
                Adicione links e clique em "Gerar Briefing"
              </Typography>
            </Box>
          )}

          {isGenerating && (
            <Box
              sx={{
                height: 400,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <CircularProgress sx={{ color: '#31fb2b' }} />
              <Typography variant="body1" sx={{ color: '#64748b' }}>
                Analisando conteúdo e gerando briefing...
              </Typography>
            </Box>
          )}

          {generatedBriefing && (
            <Box
              sx={{
                maxHeight: 400,
                overflow: 'auto',
                background: '#f8fafc',
                borderRadius: 2,
                border: '1px solid #e2e8f0',
                p: 3,
              }}
            >
              <pre
                style={{
                  whiteSpace: 'pre-wrap',
                  fontFamily: '"Roboto Mono", monospace',
                  fontSize: '0.875rem',
                  lineHeight: 1.6,
                  margin: 0,
                  color: '#00213a',
                }}
              >
                {generatedBriefing}
              </pre>
            </Box>
          )}
        </Paper>
      </Box>
    </Container>
  );
}