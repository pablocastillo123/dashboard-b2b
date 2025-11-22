import React, { useEffect, useState } from 'react';
import { Paper, Typography, Box, Tooltip, IconButton, Skeleton } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { formatAmount } from '../utils/formatAmount';

const DashboardTotals: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return loading ? (
    <Skeleton variant="rectangular" width="100%" height={118} sx={{ mt: 2, borderRadius: 1 }} />
  ) : (
    <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
          width: '100%',
        }}
      >
        <Box sx={{ flex: 1, width: '100%', justifyContent: 'center', textAlign: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
            <Typography variant="subtitle2" fontWeight={'bold'} color="text.secondary">
              Total en ventas
            </Typography>
            <Tooltip
              title={
                <span style={{ fontSize: 16, fontWeight: 500 }}>
                  Suma total de ventas realizadas en el periodo.
                </span>
              }
              arrow
            >
              <IconButton size="small" sx={{ p: 0 }}>
                <InfoOutlinedIcon fontSize="small" color="info" />
              </IconButton>
            </Tooltip>
          </Box>
          <Typography data-testid="total-sales" variant="h5" color="primary">
            {formatAmount(15200)}
          </Typography>
        </Box>
        <Box sx={{ flex: 1, width: '100%', justifyContent: 'center', textAlign: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
            <Typography variant="subtitle2" fontWeight={'bold'} color="text.secondary">
              Clientes Tops
            </Typography>
            <Tooltip
              title={
                <span style={{ fontSize: 16, fontWeight: 500 }}>
                  Clientes mayor cantidad de compras realizadas.
                </span>
              }
              arrow
            >
              <IconButton size="small" sx={{ p: 0 }}>
                <InfoOutlinedIcon fontSize="small" color="info" />
              </IconButton>
            </Tooltip>
          </Box>
          <Typography data-testid="top-clients" variant="h5" color="primary">
            {50}
          </Typography>
        </Box>
        <Box sx={{ flex: 1, width: '100%', justifyContent: 'center', textAlign: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
            <Typography variant="subtitle2" fontWeight={'bold'} color="text.secondary">
              Total de ordenes
            </Typography>
            <Tooltip
              title={
                <span style={{ fontSize: 16, fontWeight: 500 }}>
                  Total de ordenes registradas en el sistema.
                </span>
              }
              arrow
            >
              <IconButton size="small" sx={{ p: 0 }}>
                <InfoOutlinedIcon fontSize="small" color="info" />
              </IconButton>
            </Tooltip>
          </Box>
          <Typography data-testid="total-orders" variant="h5" color="primary">
            {45}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default DashboardTotals;
