import { ArrowRight } from "lucide-react";
import styles from "./corporate.module.css";
import type { CorporateCtaProps } from "./types";

export default function CorporateCta({
  title,
  body,
  buttonText,
}: CorporateCtaProps) {
  return (
    <div className={styles.cta}>
      <div className={styles.ctaContent}>
        <div className={styles.ctaText}>
          <h3 className={styles.ctaTitle}>{title}</h3>

          <p className={styles.ctaDescription}>{body}</p>
        </div>

        <a href="mailto:infowelsan@gmail.com" className={styles.ctaButton}>
          <span>{buttonText}</span>
          <ArrowRight size={18} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
