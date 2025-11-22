import type { Sale } from '../types/sale';
import type { FilterParams } from '../types/sale';

export function filterSalesData(
  data: Sale[],
  { search, vendedor, producto }: FilterParams
): Sale[] {
  return data.filter((row: Sale) => {
    const matchesSearch = search
      ? String(row.id).includes(search) ||
        row.producto.toLowerCase().includes(search.toLowerCase()) ||
        row.vendedor.toLowerCase().includes(search.toLowerCase())
      : true;
    const matchesVendedor = vendedor ? row.vendedor === vendedor : true;
    const matchesProducto = producto ? row.producto === producto : true;
    return matchesSearch && matchesVendedor && matchesProducto;
  });
}
