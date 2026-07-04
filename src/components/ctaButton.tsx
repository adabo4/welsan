import React from "react";
import styles from "./ctaButton.module.css";

export default function ContactButton({ btnText }: { btnText: string }) {
  return <button className={styles.reserveButton}>{btnText}</button>;
}
