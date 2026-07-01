import Image from "next/image";
import React from "react";
import hero from "../../public/images/hero image.png";
import { styleText } from "util";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header>
      <Image
        src={hero}
        width={650}
        height={500}
        alt="hero"
        className={styles.hero}
      ></Image>
      <h1>
        Individuálne online hodiny <span>Angličtiny</span>
      </h1>
      <h2>Angličtina bez stresu.</h2>
      <h2>
        Vaším tempom. Podľa <span>Vašich cieľov.</span>
      </h2>
    </header>
  );
}
