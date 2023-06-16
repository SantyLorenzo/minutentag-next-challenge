import { TStockPrice, stockPrices } from "./stock-price";

export const getStockData = (sku: number): TStockPrice => {
  const { stock, price } = stockPrices[sku];

  // Generate a random cents value between 0 and 99
  const randomCents = Math.floor(Math.random() * 100);

  // Create the modified price by replacing the cents part with the random value
  const modifiedPrice = Math.floor(price / 100) * 100 + randomCents;

  return {
    stock,
    price: modifiedPrice,
  };
};
