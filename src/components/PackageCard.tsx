import { Star } from "lucide-react";
import React from "react";
import styles from "./packageCard.module.css";

type PackageCardProps = {
  title: string;
  employee: string;
  classes: string;
  time: string;
  price: string;
  footerText: string;
  variant?: "default" | "featured";
};

export default function PackageCard({
  title,
  employee,
  classes,
  time,
  price,
  footerText,
  variant = "default",
}: PackageCardProps) {
  return (
    <article
      className={`${styles.cardWrapper} ${variant === "featured" ? styles.featured : ""}`}
    >
      <header>
        <div className={styles.titleWrapper}>
          <Star className={styles.starColor} fill="#d4af37"></Star>
          <h3 className={`${styles.title} `}>{title}</h3>
        </div>
        <p className={styles.employee}>{employee}</p>
        <p className={styles.classes}>{classes}</p>
        <p className={styles.time}>{time}</p>
        <p className={styles.price}>{price}</p>
      </header>

      <footer className={styles.footer}>
        <p className={styles.footerText}>{footerText}</p>
      </footer>
    </article>
  );
}
