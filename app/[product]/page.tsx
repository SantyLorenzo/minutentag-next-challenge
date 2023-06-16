"use client";
import Link from "next/link";
import Image from "next/image";

import styles from "./page.module.css";
import { products } from "@/api/products";
import { ProductRow } from "@/components/TableRow";

type TProductDetailsProps = {
  params: { product: string };
};

const ProductDetails = async (props: TProductDetailsProps) => {
  const productId = props?.params?.product?.split("-")[0];
  const productData = products.find((product) => `${product.id}` === productId);

  if (!productData) {
    return <p>Ups, no hay informacion de este producto.</p>;
  }

  return (
    <section className={styles.section}>
      <Image
        priority
        width={400}
        height={400}
        alt={productData.brand}
        src={productData.image}
      />

      <div className={styles.product_details}>
        <p className={styles.brand}>{productData.brand}</p>
        <p className={styles.data}>Abv: {productData.abv}</p>
        <p className={styles.data}>Style: {productData.style}</p>
        <p className={styles.data}>Sub-Style: {productData.substyle}</p>
        <p className={styles.data}>Origin: {productData.origin}</p>
        <p className={styles.data}>{productData.information}</p>

        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tableHead}>Tamaños Disponibles</th>
              <th className={styles.tableHead}>Stock Disponible</th>
              <th className={styles.tableHead}>Precio</th>
            </tr>
          </thead>
          <tbody>
            {productData.skus.map((sku) => (
              <ProductRow key={sku.code} {...sku} />
            ))}
          </tbody>
        </table>

        <Link href="/">Volver al listado</Link>
      </div>
    </section>
  );
};

export default ProductDetails;
