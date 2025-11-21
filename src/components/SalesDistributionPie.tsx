import React from 'react';
import { Paper, Typography } from '@mui/material';
import { ResponsivePie } from '@nivo/pie';
import { salesDistributionData } from '../mocks/salesDistributionData';

const SalesDistributionPie: React.FC = () => {
  return (
    <Paper sx={{ height: 300, padding: 2 }} elevation={3}>
      <Typography sx={{ color: 'gray' }}>Distribución de Ventas</Typography>
      <ResponsivePie
        data={salesDistributionData}
        margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
        innerRadius={0.5}
        padAngle={1}
        cornerRadius={3}
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        enableArcLabels={true}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        animate
      />
    </Paper>
  );
};

export default SalesDistributionPie;
