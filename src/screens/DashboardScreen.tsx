import { Box, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CountrySalesChart from '../components/CountrySalesChart';
import MonthlySalesChart from '../components/MonthlySalesChart';
import SalesDistributionPie from '../components/SalesDistributionPie';
import RecentSalesTable from '../components/RecentSalesTable';
import DashboardTotals from '../components/DashboardTotals';

const DashboardScreen = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box width="100%" height="100%" minHeight="80vh" p={2}>
      <Grid container spacing={2} justifyContent="center">
        <Grid size={12}>
          <DashboardTotals />
        </Grid>
        <Grid size={12} container spacing={2}>
          <Grid size={isSmall ? 12 : 8}>
            <MonthlySalesChart />
          </Grid>
          <Grid size={isSmall ? 12 : 4}>
            <SalesDistributionPie />
          </Grid>
        </Grid>
        <Grid size={12}>
          <CountrySalesChart />
        </Grid>
        <Grid size={12}>
          <RecentSalesTable />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardScreen;
