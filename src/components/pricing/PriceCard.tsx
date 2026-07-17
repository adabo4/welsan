import styles from "./pricingSummary.module.css";

type PriceCardProps = {
  title: string;
  price?: string;
  outlined?: boolean;
};

export default function PriceCard({
  title,
  price,
  outlined = false,
}: PriceCardProps) {
  return (
    <div
      className={`${styles.card} ${outlined ? styles.outlined : styles.filled}`}
    >
      <p className={styles.title}>{title}</p>

      {!outlined && <p className={styles.price}>{price}</p>}
    </div>
  );
}
