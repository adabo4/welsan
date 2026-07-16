import { Building2 } from "lucide-react";
import styles from "./corporate.module.css";
import type { CorporateHeaderProps } from "./types";

export default function CorporateHeader({
  label,
  title,
  titleAccent,
  sub,
  body,
}: CorporateHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.label}>
        <Building2 size={14} aria-hidden="true" />
        {label}
      </div>

      <h2 className={styles.title}>
        {title} <span className={styles.titleAccent}>{titleAccent}</span>
      </h2>

      <p className={styles.subtitle}>{sub}</p>

      <p className={styles.description}>{body}</p>
    </header>
  );
}
