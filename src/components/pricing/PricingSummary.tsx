import PriceCard from "./PriceCard";
import styles from "./pricingSummary.module.css";

export default function PricingSummary() {
  return (
    <>
      <div className={styles.sectionLabel}>
        <span>Cenník</span>
      </div>

      <div className={styles.cards}>
        <PriceCard title="Individuálne hodiny" price="25 € / 60 min" />

        <span className={styles.or}>alebo</span>

        <PriceCard title="Firemná výučba" price="Cena dohodou" />

        <span className={styles.or}>alebo</span>

        <PriceCard title="Kurz na mieru" outlined />
      </div>
    </>
  );
}
