import { Globe, Mail, Phone, Building2, MapPin } from "lucide-react";

import Image from "next/image";
import brush from "../../public/images/brush2.png";

import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* WELSAN */}

        <div className={styles.column}>
          <h2 className={styles.logo}>WELSAN</h2>

          <div className={styles.goldLine}></div>

          <p className={styles.slogan}>
            Together we learn,
            <br />
            grow and succeed.
          </p>
        </div>

        {/* Kontakt */}

        <div className={styles.column}>
          <h3 className={styles.heading}>Kontakt</h3>

          <a href="https://www.anglictinawelsan.com" className={styles.contact}>
            <Globe size={22} />
            www.anglictinawelsan.com
          </a>

          <a href="mailto:infowelsan@gmail.com" className={styles.contact}>
            <Mail size={22} />
            infowelsan@gmail.com
          </a>

          <a href="tel:+421948592508" className={styles.contact}>
            <Phone size={22} />
            +421 948 592 508
          </a>
        </div>

        {/* Spoločnosť */}

        <div className={styles.column}>
          <h3 className={styles.heading}>Spoločnosť</h3>

          <div className={styles.company}>
            <Building2 size={22} />

            <div>
              <p className={styles.companyName}>
                Angličtina WELSAN,&nbsp;s.&nbsp;r.&nbsp;o.
              </p>
              <p>IČO: 51842769</p>
            </div>
          </div>
        </div>

        {/* Sídlo */}

        <div className={styles.column}>
          <h3 className={styles.heading}>Sídlo</h3>

          <div className={styles.company}>
            <MapPin size={22} />

            <div>
              <p>Gorkého 4</p>
              <p>917 02 Trnava</p>
            </div>
          </div>

          <Image
            src={brush}
            alt="UK Flag"
            width={250}
            className={styles.flag}
          />
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2026 Angličtina WELSAN, s. r. o. Všetky práva vyhradené.</p>

        <div className={styles.links}>
          <Link href="/gdpr">Ochrana osobných údajov</Link>
          <span>•</span>
          <a href="#">Cookies</a>
          <span>•</span>
          <a href="#">Obchodné podmienky</a>
        </div>
      </div>
    </footer>
  );
}
