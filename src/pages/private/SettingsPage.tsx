import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Switch,
  FormControlLabel,
  TextField,
  Button,
  Divider,
  Avatar,
} from '@mui/material';
import { Save, Edit, Notifications, Security, Palette } from '@mui/icons-material';
import { useAuth } from '../../hooks/useAuth';

export default function SettingsPage() {
  const { user } = useAuth();

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
          Configurações
        </Typography>
        <Typography variant="body1" sx={{ color: '#64748b' }}>
          Personalize sua experiência e configure suas preferências
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' },
          gap: 3,
        }}
      >
        {/* Main Settings */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Profile Settings */}
          <Card
            sx={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              border: '1px solid #e2e8f0',
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Edit sx={{ color: '#31fb2b', mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#00213a' }}>
                  Perfil
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  fullWidth
                  label="Nome"
                  defaultValue={user?.name || ''}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Email"
                  defaultValue={user?.email || ''}
                  variant="outlined"
                  type="email"
                />
                <TextField
                  fullWidth
                  label="Empresa"
                  placeholder="Nome da sua empresa"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Cargo"
                  placeholder="Seu cargo"
                  variant="outlined"
                />
              </Box>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card
            sx={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              border: '1px solid #e2e8f0',
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Notifications sx={{ color: '#31fb2b', mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#00213a' }}>
                  Notificações
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Notificações por email"
                />
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Alertas de novos briefings"
                />
                <FormControlLabel
                  control={<Switch />}
                  label="Relatórios semanais"
                />
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Notificações de tendências"
                />
              </Box>
            </CardContent>
          </Card>

          {/* Privacy Settings */}
          <Card
            sx={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              border: '1px solid #e2e8f0',
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Security sx={{ color: '#31fb2b', mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#00213a' }}>
                  Privacidade e Segurança
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Perfil público"
                />
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Autenticação de dois fatores"
                />
                <FormControlLabel
                  control={<Switch />}
                  label="Compartilhamento de dados para analytics"
                />
                <Divider sx={{ my: 2 }} />
                <Button
                  variant="outlined"
                  color="error"
                  sx={{ alignSelf: 'flex-start' }}
                >
                  Alterar Senha
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Sidebar */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Profile Card */}
          <Card
            sx={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              border: '1px solid #e2e8f0',
            }}
          >
            <CardContent sx={{ p: 3, textAlign: 'center' }}>
              <Avatar
                src={user?.avatar}
                sx={{
                  width: 80,
                  height: 80,
                  mx: 'auto',
                  mb: 2,
                  border: '3px solid #31fb2b',
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#00213a', mb: 1 }}>
                {user?.name}
              </Typography>
              <Typography variant="body2" sx={{ color: '#64748b', mb: 2 }}>
                {user?.email}
              </Typography>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  borderColor: '#31fb2b',
                  color: '#31fb2b',
                  '&:hover': {
                    backgroundColor: 'rgba(49, 251, 43, 0.04)',
                    borderColor: '#28d123',
                  },
                }}
              >
                Alterar Foto
              </Button>
            </CardContent>
          </Card>

          {/* Theme Settings */}
          <Card
            sx={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              border: '1px solid #e2e8f0',
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Palette sx={{ color: '#31fb2b', mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#00213a' }}>
                  Aparência
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <FormControlLabel
                  control={<Switch />}
                  label="Modo escuro"
                />
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Animações"
                />
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Sons de notificação"
                />
              </Box>
            </CardContent>
          </Card>

          {/* Save Button */}
          <Button
            variant="contained"
            startIcon={<Save />}
            sx={{
              background: 'linear-gradient(135deg, #31fb2b 0%, #28d123 100%)',
              color: '#00213a',
              fontWeight: 600,
              py: 2,
              '&:hover': {
                background: 'linear-gradient(135deg, #28d123 0%, #22b01d 100%)',
              },
            }}
          >
            Salvar Alterações
          </Button>
        </Box>
      </Box>
    </Container>
  );
}