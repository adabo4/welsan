"use client";
import {
  ArrowDownRight,
  ArrowRight,
  CalendarDays,
  MessageCircle,
  Monitor,
  ShieldCheck,
  Target,
  UserRound,
} from "lucide-react";
import styles from "./pricingCta.module.css";
import { useModal } from "@/context/ModalContext";
import VirtualClassroom from "./pricing/VirtualClassroom";

const bottomItems = [
  { icon: ShieldCheck, text: "Bezpečné online prostredie" },
  { icon: CalendarDays, text: "Flexibilné termíny podľa teba" },
  { icon: Target, text: "Zamerané na tvoje ciele" },
  { icon: MessageCircle, text: "Konverzácia, gramatika, slovná zásoba" },
];

export default function PricingCta() {
  const { openContactModal } = useModal();
  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.card}>
        <div className={styles.priceSide}>
          <div className={styles.brush}>
            <span className={styles.price}>25</span>
            <span className={styles.currency}>EUR</span>
            <span className={styles.duration}>/ 60 MIN</span>
          </div>

          <p className={styles.note}>
            Investícia do seba,
            <br />
            ktorá sa vždy oplatí.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.infoSide}>
          <div
            onClick={() =>
              document
                .getElementById("virtualClassroom")
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className={`${styles.infoItem}   ${styles.onlineLessons}`}
          >
            <span className={styles.iconCircle}>
              <Monitor size={34} />
            </span>
            <div className={styles.onlineContent}>
              <div>
                <h3>Online cez Virtuálnu učebňu</h3>
                <p>
                  Výučba prebieha v profesionálnej virtuálnej učebni navrhnutej
                  špeciálne pre online výučbu jazykov.
                </p>
              </div>
              <ArrowDownRight size={34} className={styles.moreArrow} />
            </div>
          </div>

          {/* <div className={styles.infoSide}>
            <span className={styles.iconCircle}>
              <ArrowDown
                onClick={() => setShowText((prev) => !prev)}
                className={styles.arrowDown}
              ></ArrowDown>
            </span>
            <div className={styles.infoItem}>
              <div>
                <p className={`${showText ? styles.show : ""}`}>
                  Nie je potrebné nič inštalovať – stačí kliknúť na odkaz a
                  pripojiť sa cez internetový prehliadač. Moderná virtuálna
                  učebňa s interaktívnou tabuľou, zdieľaním materiálov a
                  jednoduchým pripojením jedným kliknutím.
                </p>
              </div>
            </div>
          </div> */}

          <div className={styles.line} />

          <div className={`${styles.infoItem} ${styles.experience}`}>
            <span className={styles.iconCircle}>
              <UserRound size={34} />
            </span>
            <div>
              <h3>Viac ako 11 rokov skúseností</h3>
              <p>Profesionálne vedenie a priateľský prístup.</p>
            </div>
          </div>

          <div className={styles.ctaWrapper}>
            <button onClick={openContactModal} className={styles.ctaButton}>
              Rezervuj si svoju hodinu
              <span>
                <ArrowRight size={30} />
              </span>
            </button>
            <p className={styles.script}>začni ešte dnes!</p>
          </div>
        </div>
      </div>

      <VirtualClassroom></VirtualClassroom>

      <div className={styles.bottomBar}>
        {bottomItems.map((item) => {
          const Icon = item.icon;
          return (
            <div className={styles.bottomItem} key={item.text}>
              <Icon size={34} />
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
