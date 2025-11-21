
import { Typography, Avatar, Box, Button, TextField, Paper, IconButton, Tooltip } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { updateUser } from '../redux/slices/userSlice';
import type { ProfileForm, User } from "../types/user";
import { emailRegex, numericRegex, phoneRegex } from "../utils/regex";

const ProfileScreen = () => {
  const [edit, setEdit] = useState(false);
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.user) as User;
  const { register, handleSubmit, setValue, reset, watch, formState: { errors } } = useForm<ProfileForm>();

  const handleEdit = () => {
    reset(profile);
    setEdit(true);
  };

  const handleCancel = () => {
    setEdit(false);
  };

  const onSubmit = (data: ProfileForm) => {
    dispatch(updateUser(data));
    setEdit(false);
  };
 
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setValue('foto', ev.target?.result as string, { shouldValidate: true });
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const photoPreview = watch('foto');

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="100%" height="100%" minHeight="80vh">
      <Paper sx={{ p: 4, maxWidth: 400, width: '100%' }}>
        <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
          <Box position="relative" display="inline-block" mb={2}>
            <Avatar sx={{ width: 80, height: 80 }} src={edit ? photoPreview : profile.foto}>
              {!edit && !profile.foto && <AccountCircleIcon sx={{ fontSize: 60 }} />}
            </Avatar>
            {edit && (
              <Box position="absolute" top={0} right={-10} zIndex={1}>
                <Tooltip title="Editar foto">
                  <IconButton component="label" size="small" color="primary" sx={{ background: 'white', boxShadow: 1 }}>
                    <EditIcon fontSize="small" />
                    <input type="file" name="foto" accept="image/*" hidden onChange={handlePhotoChange} />
                  </IconButton>
                </Tooltip>
              </Box>
            )}
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
            <Typography variant="h4" gutterBottom>
              {profile.nombre}
            </Typography>
            <Typography variant="h4" gutterBottom>
              {profile.apellido}
            </Typography>
          </Box>
        </Box>
        {edit ? (
          <Box component="form" onSubmit={handleSubmit(onSubmit)} display="flex" flexDirection="column" gap={2}>
            <Box display="flex" flexDirection="row" gap={2}>
              <TextField
                label="Nombre"
                fullWidth
                {...register('nombre', { required: 'El nombre es obligatorio' })}
                error={!!errors.nombre}
                helperText={errors.nombre?.message}
              />
              <TextField
                label="Apellido"
                fullWidth
                {...register('apellido', { required: 'El apellido es obligatorio' })}
                error={!!errors.apellido}
                helperText={errors.apellido?.message}
              />
            </Box>
            <TextField
              label="Teléfono"
              fullWidth
              {...register('telefono', { required: 'El teléfono es obligatorio', validate: (v) => {
                if(!numericRegex.test(v)) return 'El teléfono debe ser numérico';
                if(!phoneRegex.test(v)) return 'Teléfono inválido';
              }})}
              error={!!errors.telefono}
              helperText={errors.telefono?.message}
            />
            <TextField
              label="Correo"
              fullWidth
              {...register('correo', {
                required: 'El correo es obligatorio',
                pattern: {
                  value: emailRegex,
                  message: 'Correo inválido'
                }
              })}
              error={!!errors.correo}
              helperText={errors.correo?.message}
            />
            <TextField
              label="Dirección"
              fullWidth
              {...register('direccion', { required: 'La dirección es obligatoria' })}
              error={!!errors.direccion}
              helperText={errors.direccion?.message}
            />
            <Box width={'100%'}>
              <Button type="submit" sx={{width:'100%'}} variant="contained" color="primary">Guardar</Button>
            </Box>
            <Box width={'100%'}>
              <Button variant="outlined" sx={{width:'100%'}} color="secondary" onClick={handleCancel}>Cancelar</Button>
            </Box>
          </Box>
        ) : (
          <Box display="flex" flexDirection="column" gap={2}>
            <Box display="flex" flexDirection="row" gap={2}>
              <Typography variant="subtitle2" sx={{fontWeight:'bold'}}>Teléfono:</Typography>
              <Typography>{profile.telefono}</Typography>
            </Box>
            <Box display="flex" flexDirection="row" gap={2}>
              <Typography variant="subtitle2" sx={{fontWeight:'bold'}}>Correo:</Typography>
              <Typography>{profile.correo}</Typography>
            </Box>
            <Box display="flex" flexDirection="row" gap={2}>
              <Typography variant="subtitle2" sx={{fontWeight:'bold'}}>Dirección:</Typography>
              <Typography>{profile.direccion}</Typography>
            </Box>
            <Box width={'100%'} display="flex" justifyContent="center">
              <Button variant="contained" sx={{width:'100%'}} onClick={handleEdit}>Editar</Button>
            </Box>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default ProfileScreen;
