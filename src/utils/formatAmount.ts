export function formatAmount(amount: number, locales: string = 'es', currency: string = 'USD'): string {
  return amount.toLocaleString(locales, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
