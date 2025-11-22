import { describe, it, expect, vi } from 'vitest';
import { render, screen, act, fireEvent } from '@testing-library/react';
import RecentSalesTable from '../src/components/RecentSalesTable';
import '@testing-library/jest-dom/vitest';

describe('RecentSalesTable', () => {
  it('muestra datos en el DataGrid', async () => {
    vi.useFakeTimers();
    render(<RecentSalesTable />);
    await act(async () => {
      vi.runAllTimers();
    });
    const rows = screen.getAllByRole('row').filter((row) => row.getAttribute('data-rowindex'));
    expect(rows.length).toBeGreaterThan(0);
    vi.useRealTimers();
  });

  it('filtra datos usando el buscador', async () => {
    vi.useFakeTimers();
    render(<RecentSalesTable />);
    await act(async () => {
      vi.runAllTimers();
    });
    const searchInput = screen.getByPlaceholderText('Buscar por N° de orden, vendedor o producto');
    fireEvent.change(searchInput, { target: { value: 'Laptop' } });

    // Espera a que el DataGrid se actualice
    await act(async () => {});
    const filteredRows = screen
      .getAllByRole('row')
      .filter((row) => row.getAttribute('data-rowindex'));

    expect(filteredRows.length).toBeGreaterThan(0);
    expect(filteredRows.some((row) => row.textContent?.toLowerCase().includes('laptop'))).toBe(
      true
    );
    vi.useRealTimers();
  });
});
