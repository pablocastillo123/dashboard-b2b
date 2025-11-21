import React from 'react';
import { Paper, Typography, Box, Tooltip, IconButton } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const DashboardTotals: React.FC = () => {
  return (
    <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
          width: '100%',
        }}>
          <Box sx={{ flex: 1,  width: '100%', justifyContent: 'center', textAlign: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
              <Typography variant="subtitle2" fontWeight={'bold'} color="text.secondary">Total en ventas</Typography>
              <Tooltip title={
                <span style={{ fontSize: 16, fontWeight: 500 }}>Suma total de ventas realizadas en el periodo.</span>} arrow>
                <IconButton size="small" sx={{ p: 0 }}>
                  <InfoOutlinedIcon fontSize="small" color="info" />
                </IconButton>
              </Tooltip>
            </Box>
            <Typography variant="h5" color="primary">${15200}</Typography>
            </Box>
          <Box sx={{ flex: 1,  width: '100%', justifyContent: 'center', textAlign: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
              <Typography variant="subtitle2" fontWeight={'bold'} color="text.secondary">Clientes Tops</Typography>
              <Tooltip title={<span style={{ fontSize: 16, fontWeight: 500 }}>Clientes mayor cantidad de compras realizadas.</span>} arrow>
                <IconButton size="small" sx={{ p: 0 }}>
                  <InfoOutlinedIcon fontSize="small" color="info" />
                </IconButton>
              </Tooltip>
            </Box>
            <Typography variant="h5" color="primary">{50}</Typography>
            </Box>
          <Box sx={{ flex: 1,  width: '100%', justifyContent: 'center', textAlign: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
              <Typography variant="subtitle2" fontWeight={'bold'} color="text.secondary">Total de ordenes</Typography>
              <Tooltip title={<span style={{ fontSize: 16, fontWeight: 500 }}>Total de ordenes registradas en el sistema.</span>} arrow>
                <IconButton size="small" sx={{ p: 0 }}>
                  <InfoOutlinedIcon fontSize="small" color="info" />
                </IconButton>
              </Tooltip>
            </Box>
            <Typography variant="h5" color="primary">{45}</Typography>
            </Box>
      </Box>
    </Paper>
  );
};

export default DashboardTotals;
