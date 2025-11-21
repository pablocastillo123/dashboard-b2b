
import { Container, Box, Typography, TextField, Button, Paper, IconButton, InputAdornment } from "@mui/material";
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';


type LoginFormInputs = {
  username: string;
  password: string;
};

const LoginScreen = () => {

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const onSubmit = () => {
    navigate('/dashboard', { replace: true });
  };

  const validatePassword = (value: string) => {
    if (value.length < 6) {
      return 'La contraseña debe tener al menos 6 caracteres';
    }
    if (!/[A-Z]/.test(value)) {
      return 'La contraseña debe contener al menos una letra mayúscula';
    }
    return true;
  }

  return (
    <Container maxWidth="sm">
      <Box mt={8} component={Paper} elevation={3} p={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Iniciar Sesión
        </Typography>
        <Box component="form" display="flex" flexDirection="column" gap={2} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Usuario"
            variant="outlined"
            fullWidth
            {...register('username', { required: 'El usuario es obligatorio' })}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          <TextField
            label="Contraseña"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            fullWidth
            {...register('password', {
              required: 'La contraseña es obligatoria',
              validate: validatePassword,
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Ingresar
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginScreen;
