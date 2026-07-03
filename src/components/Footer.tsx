import React from "react";
import styles from "./footer.module.css";
import { Globe, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <Globe />
      </div>
      <div className={styles.contact}>
        <Mail />
      </div>
      <div className={styles.contact}>
        <Phone />
      </div>
    </footer>
  );
}
