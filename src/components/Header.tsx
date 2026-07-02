import Image from "next/image";
import React from "react";
import hero from "../../public/images/hero image.png";
import { styleText } from "util";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      <Image
        src={hero}
        width={650}
        height={500}
        alt="hero"
        className={styles.hero}
      ></Image>
      <div className={styles.headerText}>
        <h1 className={styles.title}>
          <span className={styles.individual}>Individuálne</span>{" "}
          <span className={styles.online}>online hodiny </span>
          <span className={styles.english}>Angličtiny</span>
        </h1>
        <div className={styles.subtitleWrapper}>
          <h2>Angličtina bez stresu.</h2>
          <h2>
            Vaším tempom. Podľa{" "}
            <span className={styles.goals}>vašich cieľov.</span>
          </h2>
        </div>
      </div>
    </header>
  );
}
