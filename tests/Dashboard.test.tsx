import { describe, expect, it, vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import DashboardTotals from '../src/components/DashboardTotals';
import '@testing-library/jest-dom/vitest';

describe('DashboardTotals Component', () => {
  it('Totales con números validos', async () => {
    vi.useFakeTimers();
    render(<DashboardTotals />);
    await act(() => {
      vi.runAllTimers(); // Adelanta el tiempo para quitar el loading
      return Promise.resolve();
    });
    const totalSales = screen.getByTestId('total-sales');
    const topClients = screen.getByTestId('top-clients');
    const totalOrders = screen.getByTestId('total-orders');

    expect(topClients).toBeInTheDocument();
    expect(totalOrders).toBeInTheDocument();
    expect(totalSales).toBeInTheDocument();

    expect(totalSales.textContent).toMatch(/15[.,]200/);
    expect(topClients.textContent).toBe('50');
    expect(totalOrders.textContent).toBe('45');
    vi.useRealTimers();
  });
});
