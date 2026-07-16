import { CheckCircle2 } from "lucide-react";
import styles from "./corporate.module.css";
import type { CorporateBenefitsProps } from "./types";

export default function CorporateBenefits({
  checklist,
  includesTitle,
  includes,
}: CorporateBenefitsProps) {
  return (
    <div className={styles.benefits}>
      <article className={styles.checklistCard}>
        <h3 className={styles.cardTitle}>Čo ponúkam firmám</h3>

        <ul className={styles.checklist}>
          {checklist.map((item) => (
            <li key={item} className={styles.checklistItem}>
              <CheckCircle2
                className={styles.checkIcon}
                size={17}
                aria-hidden="true"
              />

              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>

      <article className={styles.includesCard}>
        <h3 className={`${styles.cardTitle} ${styles.lightCardTitle}`}>
          {includesTitle}
        </h3>

        <ul className={styles.includesList}>
          {includes.map((item) => (
            <li key={item} className={styles.includesItem}>
              <CheckCircle2
                className={styles.includesIcon}
                size={17}
                aria-hidden="true"
              />

              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
