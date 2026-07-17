"use client";
import { ArrowDownRight, ArrowRight, Monitor, UserRound } from "lucide-react";
import { useModal } from "@/context/ModalContext";

import styles from "./mainPricingCard.module.css";
import VirtualClassroom from "./VirtualClassroom";
export default function MainPricingCard() {
  const { openContactModal } = useModal();
  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.card}>
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
            </div>
            <ArrowDownRight size={34} className={styles.moreArrow} />
          </div>

          <div className={`${styles.infoItem} ${styles.experience}`}>
            <span className={styles.iconCircle}>
              <UserRound size={34} />
            </span>
            <div>
              <h3>Viac ako 11 rokov skúseností</h3>
              <p>Profesionálne vedenie a priateľský prístup.</p>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottomRow}>
          <div className={styles.priceSide}>
            <p className={styles.note}>
              Investícia do seba,
              <br />
              ktorá sa vždy oplatí.
            </p>
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
    </section>
  );
}
