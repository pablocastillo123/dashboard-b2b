import { describe, it, expect } from 'vitest';
import { filterSalesData } from '../src/helpers/filterSalesData';
import type { Sale, FilterParams } from '../src/types/sale';

describe('filterSalesData', () => {
  const mockData: Sale[] = [
    { id: 1, producto: 'Laptop', vendedor: 'Ana', cantidad: 2, total: 2000, fecha: '2025-11-01' },
    { id: 2, producto: 'Mouse', vendedor: 'Luis', cantidad: 5, total: 100, fecha: '2025-11-02' },
    { id: 3, producto: 'Laptop', vendedor: 'Luis', cantidad: 1, total: 1000, fecha: '2025-11-03' },
    { id: 4, producto: 'Teclado', vendedor: 'Ana', cantidad: 3, total: 150, fecha: '2025-11-04' },
  ];

  it('filtra por vendedor', () => {
    const params: FilterParams = { search: '', vendedor: 'Ana', producto: '' };
    const result = filterSalesData(mockData, params);
    expect(result).toHaveLength(2);
    expect(result.every((r) => r.vendedor === 'Ana')).toBe(true);
  });

  it('filtra por producto', () => {
    const params: FilterParams = { search: '', vendedor: '', producto: 'Laptop' };
    const result = filterSalesData(mockData, params);
    expect(result).toHaveLength(2);
    expect(result.every((r) => r.producto === 'Laptop')).toBe(true);
  });

  it('filtra por búsqueda', () => {
    const params: FilterParams = { search: 'Luis', vendedor: '', producto: '' };
    const result = filterSalesData(mockData, params);
    expect(result).toHaveLength(2);
    expect(result.every((r) => r.vendedor === 'Luis')).toBe(true);
  });

  it('filtra por varios parámetros', () => {
    const params: FilterParams = { search: 'Ana', vendedor: 'Ana', producto: 'Teclado' };
    const result = filterSalesData(mockData, params);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(4);
  });

  it('sin filtros retorna todos', () => {
    const params: FilterParams = { search: '', vendedor: '', producto: '' };
    const result = filterSalesData(mockData, params);
    expect(result).toHaveLength(4);
  });
});
