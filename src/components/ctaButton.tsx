import React from "react";
import styles from "./ctaButton.module.css";

export default function ContactButton({
  btnText,
  icon,
  classname,
}: {
  btnText: string;
  icon?: React.ReactElement;
  classname?: string;
}) {
  return (
    <button className={`${styles.reserveButton} ${classname ?? ""}`}>
      {btnText} {icon}
    </button>
  );
}
