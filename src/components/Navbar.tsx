"use client";
import Image from "next/image";
import flag from "../../public/images/flag2.png";
import logo from "../../public/images/logo.png";
import sraf from "../../public/images/sraf.png";
import styles from "./navbar.module.css";
import ContactButton from "./ctaButton";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow((prev) => !prev);
  }

  const goToSection = (id: string) => {
    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
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

        <ul
          className={`${styles.navLinks} ${show ? styles.responsiveNav : ""}`}
        >
          <li>
            <button
              type="button"
              onClick={() => {
                setShow(false);
                if (pathname !== "/") {
                  router.push("/");
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              Domov
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                setShow(false);
                goToSection("cennik");
              }}
            >
              Cenník
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                setShow(false);
                goToSection("firmy");
              }}
            >
              Firemné vzdelávanie
            </button>
          </li>
        </ul>

        <div className={styles.rightSide}>
          <div className={styles.ctaNavButton}>
            <ContactButton btnText="Rezervuj si hodinu"></ContactButton>
          </div>

          <Image
            src={flag}
            width={250}
            height={80}
            alt="flag"
            className={styles.flagImg}
          ></Image>
        </div>

        <Menu size={25} onClick={toggleShow} className={styles.menuIcon} />
      </nav>
    </>
  );
}
