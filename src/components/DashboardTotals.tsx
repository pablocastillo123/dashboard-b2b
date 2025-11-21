import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

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
                <Typography variant="subtitle2" fontWeight={'bold'} color="text.secondary">Total en ventas</Typography>
                <Typography variant="h5" color="primary">${15200}</Typography>
            </Box>
            <Box sx={{ flex: 1,  width: '100%', justifyContent: 'center', textAlign: 'center' }}>
                <Typography variant="subtitle2" fontWeight={'bold'} color="text.secondary">Clientes Tops</Typography>
                <Typography variant="h5" color="primary">{50}</Typography>
            </Box>
            <Box sx={{ flex: 1,  width: '100%', justifyContent: 'center', textAlign: 'center' }}>
                <Typography variant="subtitle2" fontWeight={'bold'} color="text.secondary">Órdenes pendientes</Typography>
                <Typography variant="h5" color="primary">{45}</Typography>
            </Box>
      </Box>
    </Paper>
  );
};

export default DashboardTotals;
