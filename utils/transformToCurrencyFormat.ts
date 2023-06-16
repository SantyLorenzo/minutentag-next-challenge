export const transformToCurrencyFormat = (price: number): string => {
  // Extract the dollar amount
  const dollars = Math.floor(price / 100);
  // Extract the cents amount
  const cents = price % 100;

  // Add leading zero if necessary
  const formattedCents = cents < 10 ? `0${cents}` : cents.toString();

  return `$${dollars}.${formattedCents}`;
};
