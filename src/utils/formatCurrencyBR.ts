export function formatCurrencyBR(value: number) {
  const options_BRL: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: 'BRL',
    currencyDisplay: 'symbol',
    minimumFractionDigits: 2,
  };

  return new Intl.NumberFormat('pt-BR', options_BRL).format(value ?? 0);
}
