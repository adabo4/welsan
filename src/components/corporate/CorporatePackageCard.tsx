import styles from "./corporate.module.css";

type CorporatePackageCardProps = {
  name: string;
  star: string;
  employee: string;
  classes: string;
  time: string;
  price: string;
  description: string;
  featured?: boolean;
};

export default function CorporatePackageCard({
  name,
  star,
  employee,
  classes,
  time,
  price,
  description,
  featured = false,
}: CorporatePackageCardProps) {
  return (
    <article
      className={`${styles.packageCard} ${
        featured ? styles.featuredPackage : ""
      }`}
    >
      {featured && <span className={styles.popularBadge}>Najobľúbenejší</span>}

      <div className={styles.packageHeader}>
        <span className={styles.packageStar}>{star}</span>

        <h4 className={styles.packageName}>{name}</h4>
      </div>

      <p className={styles.packageEmployee}>{employee}</p>

      <p className={styles.packageClasses}>{classes}</p>

      <p className={styles.packageTime}>{time}</p>

      <p className={styles.packagePrice}>{price}</p>

      <p className={styles.packageDescription}>{description}</p>
    </article>
  );
}
