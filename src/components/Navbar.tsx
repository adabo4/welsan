import Image from "next/image";
import React from "react";
import flag from "../../public/images/flag2.png";
import logo from "../../public/images/logo.png";
import sraf from "../../public/images/sraf.png";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navWrapper}>
        <div className={styles.logoWrapper}>
          <Image
            className={styles.logo}
            src={logo}
            width={220}
            height={150}
            alt="logo"
          ></Image>
          <p className={styles.logoText}>Vzdelávanie, ktoré dáva zmysel</p>
        </div>
        <Image
          alt="sraf"
          src={sraf}
          width={250}
          height={250}
          className={styles.sraf}
        ></Image>

        <div className={styles.flagWrapper}>
          <Image
            src={flag}
            width={500}
            height={200}
            alt="flag"
            className={styles.flagImg}
          ></Image>
        </div>
      </nav>
    </>
  );
}
