import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { products } from "@/api/products";
import { parseProductBrand } from "@/utils/parseProductBrand";

export default async function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to the Beer House</h1>
      <div className={styles.products_container}>
        {products.map((product) => (
          <div key={product.id} className={styles.product}>
            <Image
              priority
              width={180}
              height={180}
              alt={product.brand}
              src={product.image}
            />

            <p className={styles.brand}>{product.brand}</p>

            <Link href={`/${product.id}-${parseProductBrand(product.brand)}`}>
              Ver Detalles
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
