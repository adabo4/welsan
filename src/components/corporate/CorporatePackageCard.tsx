import styles from "./corporate.module.css";

type CorporatePackageCardProps = {
  name: string;
  star: string;
  who: string;
  type: string;
  duration: string;
  price: string;
  note: string;
  highlight?: boolean;
};

export default function CorporatePackageCard({
  name,
  star,
  who,
  type,
  duration,
  price,
  note,
  highlight = false,
}: CorporatePackageCardProps) {
  return (
    <article
      className={`${styles.packageCard} ${
        highlight ? styles.featuredPackage : ""
      }`}
    >
      {highlight && <span className={styles.popularBadge}>Najobľúbenejší</span>}

      <div className={styles.packageHeader}>
        <span className={styles.packageStar}>{star}</span>

        <h4 className={styles.packageName}>{name}</h4>
      </div>

      <p className={styles.packageEmployee}>{who}</p>

      <p className={styles.packageClasses}>{type}</p>

      <p className={styles.packageTime}>{duration}</p>

      <p className={styles.packagePrice}>{price}</p>

      <p className={styles.packageDescription}>{note}</p>
    </article>
  );
}
