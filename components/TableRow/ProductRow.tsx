import { useEffect, useState } from "react";

import styles from "./ProductRow.module.css";
import { TStockPrice } from "@/api/stock-price";
import { getStockData } from "@/api/getStockData";
import { transformToCurrencyFormat } from "@/utils/transformToCurrencyFormat";
import { TSku } from "@/api/products";

export const ProductRow = (sku: TSku) => {
  const [stockData, setStockData] = useState<TStockPrice>(
    getStockData(Number(sku.code))
  );

  useEffect(() => {
    const fetchData = () => {
      const data = getStockData(Number(sku.code));
      if (data) setStockData(data);
    };

    fetchData();

    // Re-validate every 5 seconds
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, [sku]);

  return (
    <tr>
      <td className={styles.tableBody}>{sku.name}</td>
      <td className={styles.tableBody}>{stockData?.stock}</td>
      <td className={styles.tableBody}>
        {transformToCurrencyFormat(stockData?.price)}
      </td>
    </tr>
  );
};
