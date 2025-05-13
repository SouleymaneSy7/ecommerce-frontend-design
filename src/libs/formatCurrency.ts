export function formatCurrency(amount: number): string {
  const formatter = new Intl.NumberFormat("en-En", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(amount);
}
