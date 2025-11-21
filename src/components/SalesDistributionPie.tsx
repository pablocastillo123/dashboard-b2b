import React, { useEffect, useState } from 'react';
import { Paper, Skeleton, Typography } from '@mui/material';
import { ResponsivePie } from '@nivo/pie';
import { salesDistributionData } from '../mocks/salesDistributionData';

const SalesDistributionPie: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(false);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return loading ? (
    <Skeleton variant="rectangular" width="100%" height={300} sx={{ mt: 2, borderRadius: 1 }} />
  ) : (
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
