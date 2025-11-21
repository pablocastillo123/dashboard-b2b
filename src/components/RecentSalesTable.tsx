import React, { useState } from 'react';
import {
  Paper,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { salesTableData } from '../mocks/salesTableData';
import type { FilterParams, Sale } from '../types/sale';
import type { GridColDef } from '@mui/x-data-grid';

const RecentSalesTable: React.FC = () => {
  const [vendedor, setVendedor] = useState('');
  const [producto, setProducto] = useState('');
  const [search, setSearch] = useState('');
  const theme = useTheme();  
  const isSmall = useMediaQuery(theme.breakpoints.down('md'));

  const vendedores = Array.from(new Set(salesTableData.map(row => row.vendedor)));
  const productos = Array.from(new Set(salesTableData.map(row => row.producto)));


  function filterSalesData(data: Sale[], { search, vendedor, producto }: FilterParams): Sale[] {
    return data.filter((row: Sale) => {
      const matchesSearch = search
        ? String(row.id).includes(search) || row.producto.toLowerCase().includes(search.toLowerCase()) || row.vendedor.toLowerCase().includes(search.toLowerCase())
        : true;
      const matchesVendedor = vendedor ? row.vendedor === vendedor : true;
      const matchesProducto = producto ? row.producto === producto : true;
      return matchesSearch && matchesVendedor && matchesProducto;
    });
  }


  const filteredRows = filterSalesData(salesTableData, { search, vendedor, producto });

  const columns: GridColDef<(typeof filteredRows)[number]>[] = [
    { field: 'id', headerName: 'ID', disableColumnMenu: true, flex: 0.5, minWidth: 60, disableReorder: true },
    { field: 'producto', headerName: 'Producto', disableColumnMenu: true, flex: 1, minWidth: 120 , disableReorder: true},
    { field: 'vendedor', headerName: 'Vendedor', disableColumnMenu: true, flex: 1, minWidth: 120 , disableReorder: true},
    { field: 'cantidad', headerName: 'Cantidad', type: 'number', disableColumnMenu: true, flex: 0.7, minWidth: 90, disableReorder: true },
    { field: 'total', headerName: 'Total', type: 'number', disableColumnMenu: true, flex: 0.8, minWidth: 100, disableReorder: true },
    { field: 'fecha', headerName: 'Fecha', disableColumnMenu: true, flex: 1, minWidth: 120, disableReorder: true },
  ];

  return (
    <Paper sx={{ p: 2, mb: 2 }} elevation={3}>
      <Typography sx={{ color: 'gray', mb: 2 }}>Ventas recientes</Typography>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mb: 2 }}>
        <TextField
          size="small"
          placeholder='Buscar por N° de orden, vendedor o producto'
          variant="outlined"
          value={search}
          onChange={e => setSearch(e.target.value)}
          sx={{ flex:1 }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
              endAdornment: (
                search && (
                  <InputAdornment position="end">
                    <IconButton size="small" onClick={() => setSearch('')}>
                      <ClearIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                )
              ),
            }
          }}
        />
        <FormControl size="small" sx={{ minWidth: 140 }}>
          <InputLabel>Vendedor</InputLabel>
          <Select
            label="Vendedor"
            value={vendedor}
            onChange={e => setVendedor(e.target.value)}
          >
            <MenuItem value="">Todos</MenuItem>
            {vendedores.map(v => (
              <MenuItem key={v} value={v}>{v}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl size="small" sx={{ minWidth: 140 }}>
          <InputLabel>Producto</InputLabel>
          <Select
            label="Producto"
            value={producto}
            onChange={e => setProducto(e.target.value)}
          >
            <MenuItem value="">Todos</MenuItem>
            {productos.map(p => (
              <MenuItem key={p} value={p}>{p}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
        <Box sx={{width: '100%'}}>
            <DataGrid
            sx={{ width: isSmall ? 300 : '100%' }}
            rows={filteredRows}
            columns={columns}
            initialState={{
                pagination: { paginationModel: { pageSize: 10, page: 0 } },
            }}
            pageSizeOptions={[10]}
            autoHeight
            checkboxSelection={false}
            disableRowSelectionOnClick
            hideFooterSelectedRowCount
            />
      </Box>
    </Paper>
  );
};

export default RecentSalesTable;
