import React, { useEffect, useState } from 'react';
import { Paper, Skeleton, Typography } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';
import { lineData } from '../mocks/dashboardData';

const MonthlySalesChart: React.FC = () => {
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
    <Paper sx={{ height: 300, p: 2 }} elevation={3}>
      <Typography sx={{ color: 'gray' }}>Ventas Mensuales</Typography>
      <ResponsiveLine
        data={lineData}
        margin={{ top: 30, right: 30, bottom: 50, left: 40 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
        axisBottom={{ legend: 'Mes', legendPosition: 'middle', legendOffset: 32 }}
        axisLeft={{ legend: 'Valor', legendPosition: 'middle', legendOffset: -30 }}
        colors={{ scheme: 'category10' }}
        pointSize={10}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        animate
        isInteractive
        useMesh
      />
    </Paper>
  );
};

export default MonthlySalesChart;
