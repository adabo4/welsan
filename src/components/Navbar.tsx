import Image from "next/image";
import flag from "../../public/images/flag2.png";
import logo from "../../public/images/logo.png";
import sraf from "../../public/images/sraf.png";
import styles from "./navbar.module.css";
import ContactButton from "./ctaButton";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navWrapper}>
        <div className={styles.leftSide}>
          <div className={styles.logoWrapper}>
            <Link href="/">
              <Image
                src={logo}
                alt="WELSAN logo"
                width={170}
                height={70}
                className={styles.logo}
                priority
              />
            </Link>

            <span className={styles.logoText}>
              Vzdelávanie, ktoré dáva zmysel
            </span>
          </div>
          <Image
            alt="sraf"
            src={sraf}
            width={90}
            height={90}
            className={styles.sraf}
          ></Image>
        </div>

        <div className={styles.rightSide}>
          <ContactButton btnText="Rezervuj si hodinu"></ContactButton>

          <Image
            src={flag}
            width={250}
            height={80}
            alt="flag"
            className={styles.flagImg}
          ></Image>
        </div>
      </nav>
    </>
  );
}
