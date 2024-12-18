export const formatCurrency = (amount: number, currency = 'NGN') => {
  return new Intl.NumberFormat(undefined, {
    currency,
    currencyDisplay: 'symbol',
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(amount);
};
