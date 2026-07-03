import Image from "next/image";
import React from "react";
import hero from "../../public/images/hero image.png";
import { styleText } from "util";
import { CheckCircle2 } from "lucide-react";

import styles from "./header.module.css";

export default function Header() {
  const bullets = [
    "Individuálne súkromné hodiny 1 na 1",
    "Pre začiatočníkov aj pokročilých",
    "Konverzácia, gramatika, slovná zásoba",
    "Príprava na maturitu, pohovor či cestovanie",
    "Všetky študijné materiály ZDARMA",
    "Učte sa z pohodlia domova",
    "Kedykoľvek a odkiaľkoľvek",
  ];
  return (
    // <header className={styles.headerWrapper}>
    //   <Image
    //     src={hero}
    //     width={650}
    //     height={500}
    //     alt="hero"
    //     className={styles.hero}
    //   ></Image>
    //   <div className={styles.headerText}>
    //     <h1 className={styles.title}>
    //       <span className={styles.individual}>Individuálne</span>{" "}
    //       <span className={styles.online}>online hodiny </span>
    //       <span className={styles.english}>Angličtiny</span>
    //     </h1>
    //     <div className={styles.subtitleWrapper}>
    //       <h2>Angličtina bez stresu.</h2>
    //       <h2>
    //         Vaším tempom. Podľa{" "}
    //         <span className={styles.goals}>vašich cieľov.</span>
    //       </h2>
    //     </div>
    //   </div>
    // </header>
    <header className={styles.headerWrapper}>
      <div className={styles.heroWrapper}>
        <Image
          src={hero}
          width={650}
          height={500}
          alt="hero"
          className={styles.hero}
          priority
        />
      </div>

      <div className={styles.headerText}>
        <h1 className={styles.title}>
          <span className={styles.individual}>Individuálne</span>
          <span className={styles.online}>online hodiny</span>
          <span className={styles.english}>Angličtiny</span>
        </h1>
        <div className={styles.subtitleWrapper}>
          <h2>Angličtina bez stresu.</h2>
          <h2>
            Vaším tempom. Podľa{" "}
            <span className={styles.goals}>vašich cieľov.</span>
          </h2>
        </div>
        {/* Bullets */}

        {/* <ul className={styles.bulletList}>
          {bullets.map((bullet) => (
            <li key={bullet} className={styles.bulletItem}>
              <CheckCircle2 className={styles.bulletIcon} size={20} />
              <span>{bullet}</span>
            </li>
          ))}
        </ul> */}
      </div>
    </header>
  );
}
