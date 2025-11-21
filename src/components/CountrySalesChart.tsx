import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { ResponsiveBar } from '@nivo/bar';
import { barData } from '../mocks/dashboardData';
import { formatAmount } from '../utils/formatAmount';

const CountrySalesChart: React.FC<{ isSmall?: boolean }> = ({ isSmall }) => {
  return (
    <Paper sx={{ p: 2, mb: 2 }} elevation={3}>
      <Typography sx={{ color: 'gray', mb: 2 }}>Ventas por país</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
          alignItems: isSmall ? 'stretch' : 'flex-start',
          width: '100%',
        }}
      >
        <Box sx={{ flex: 1, minWidth: 0, height: { xs: 250, md: 350 }, minHeight: 200, width: '100%' }}>
          <ResponsiveBar
            data={barData}
            keys={['ventas']}
            indexBy="country"
            margin={{ top: 30, right: 30, bottom: 50, left: 40 }}
            padding={0.3}
            colors={{ scheme: 'nivo' }}
            axisBottom={{ legend: 'País', legendPosition: 'middle', legendOffset: 32 }}
            axisLeft={{ legend: 'Ventas', legendPosition: 'middle', legendOffset: -30 }}
            enableLabel={false}
            animate
          />
        </Box>
        <Box sx={{ flex: { xs: 'unset', md: '0 0 350px' }, width: { xs: '100%', md: 350 }, minWidth: 0 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            {/* Encabezado tipo tabla */}
            <Box sx={{ display: 'flex', fontWeight: 'bold', bgcolor: 'grey.100', borderRadius: 1, px: 2, py: 1, mb: 1 }}>
              <Box sx={{ flex: 2 }}>País</Box>
              <Box sx={{ flex: 2, textAlign: 'right' }}>Ventas</Box>
              <Box sx={{ flex: 2, textAlign: 'center' }}>Región</Box>
              <Box sx={{ flex: 1, textAlign: 'center' }}>Año</Box>
            </Box>
            {/* Filas ordenadas por ventas */}
            {[...barData]
              .sort((a, b) => b.ventas - a.ventas)
              .map((row) => (
                <Box
                  key={row.country}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: 2,
                    py: 1,
                  }}
                >
                  <Box sx={{ flex: 2 }}>{row.country}</Box>
                  <Box sx={{ flex: 2, textAlign: 'right', fontWeight: 500, color: 'primary.main' }}>{formatAmount(row.ventas)}</Box>
                  <Box sx={{ flex: 2, textAlign: 'center', fontSize: 14, color: 'text.secondary' }}>{row.region}</Box>
                  <Box sx={{ flex: 1, textAlign: 'center', fontSize: 14, color: 'text.secondary' }}>{row.year}</Box>
                </Box>
              ))}
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default CountrySalesChart;
