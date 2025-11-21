import { Box, Paper, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveLine } from '@nivo/line';
import { ResponsivePie } from '@nivo/pie';

const barData = [
  { country: 'AD', ventas: 120, region: 'Europa', year: 2023 },
  { country: 'AE', ventas: 80, region: 'Asia', year: 2023 },
  { country: 'AF', ventas: 150, region: 'Asia', year: 2022 },
  { country: 'AG', ventas: 70, region: 'América', year: 2023 },
  { country: 'GG', ventas: 80, region: 'Europa', year: 2022 },
  { country: 'PG', ventas: 20, region: 'Oceanía', year: 2023 },
  { country: 'AGA', ventas: 10, region: 'África', year: 2022 },
];

const lineData = [
  {
    id: 'Serie A',
    data: [
      { x: 'Ene', y: 40 },
      { x: 'Feb', y: 90 },
      { x: 'Mar', y: 60 },
      { x: 'Abr', y: 120 },
      { x: 'May', y: 80 },
    ],
  },
];

const pieData = [
  { id: 'Rojo', label: 'Rojo', value: 30, color: 'hsl(0, 70%, 50%)' },
  { id: 'Azul', label: 'Azul', value: 50, color: 'hsl(210, 70%, 50%)' },
  { id: 'Verde', label: 'Verde', value: 20, color: 'hsl(120, 70%, 50%)' },
];

const DashboardScreen = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box width="100%" height="100%" minHeight="80vh" p={2}>
      <Grid container spacing={3} justifyContent="center">
        <Grid size={6}>
          <Paper sx={{ height: 300, p: 2 }} elevation={3}>
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
            />
          </Paper>
        </Grid>
        <Grid size={6}>
          <Paper sx={{ height: 300, p: 2 }} elevation={3}>
            <ResponsivePie
              data={pieData}
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
        </Grid>
        <Grid size={12}>
          <Paper sx={{ p: 2, mb: 2 }} elevation={3}>
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
                        <Box sx={{ flex: 2, textAlign: 'right', fontWeight: 500, color: 'primary.main' }}>{row.ventas}</Box>
                        <Box sx={{ flex: 2, textAlign: 'center', fontSize: 14, color: 'text.secondary' }}>{row.region}</Box>
                        <Box sx={{ flex: 1, textAlign: 'center', fontSize: 14, color: 'text.secondary' }}>{row.year}</Box>
                      </Box>
                    ))}
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardScreen;
