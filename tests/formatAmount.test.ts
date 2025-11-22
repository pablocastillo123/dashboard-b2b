import { describe, it, expect } from 'vitest';
import { formatAmount } from '../src/utils/formatAmount';

describe('formatAmount', () => {
  it('formatea monto en USD por defecto', () => {
    expect(formatAmount(15200)).toBe('15.200,00 US$');
  });

  it('formatea monto en EUR', () => {
    expect(formatAmount(1234.56, 'de-DE', 'EUR')).toBe('1.234,56 €');
  });

  it('formatea monto en MXN', () => {
    expect(formatAmount(9876543.21, 'es-MX', 'MXN')).toBe('$9,876,543.21');
  });
});
