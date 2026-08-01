"use client";

import { useState } from "react";
import { ArrowRight, Building2, CheckCircle2 } from "lucide-react";

import CorporatePackageCard from "./CorporatePackageCard";
import CorporateModal from "./CorporateModal";
import styles from "./corporate.module.css";

const companyBenefits = [
  "Business English",
  "Konverzácia",
  "E-maily a telefonovanie",
  "Stretnutia a prezentácie",
  "Príprava na zahraničných klientov",
  "Technická angličtina podľa odvetvia",
  "Flexibilné termíny",
  "Fakturácia pre firmy",
];

const cooperationIncludes = [
  "Úvodné zistenie úrovne zamestnancov",
  "Odporúčanie rozdelenia do skupín",
  "Študijné materiály",
  "Online výučbu",
  "Flexibilné plánovanie hodín",
  "Pravidelnú spätnú väzbu",
];

const packages = [
  {
    name: "Start",
    star: "⭐",
    employee: "1 zamestnanec",
    classes: "Online individuálne hodiny",
    time: "60 min",
    price: "od 30 €/hod",
    description:
      "Ideálne pre manažérov alebo zamestnancov, ktorí potrebujú rýchly progres.",
  },
  {
    name: "Team",
    star: "⭐",
    employee: "2–5 zamestnancov",
    classes: "Interaktívna skupinová výučba",
    time: "60 min",
    price: "od 45 €/hod za skupinu",
    description: "Najobľúbenejšia voľba pre menšie firmy.",
    featured: true,
  },
  {
    name: "Company",
    star: "⭐",
    employee: "6–10 zamestnancov",
    classes: "Firemný kurz na mieru",
    time: "Pravidelné týždenné hodiny",
    price: "Cenová ponuka individuálne",
    description: "Obsah prispôsobený konkrétnej firme a pracovným situáciám.",
  },
];

export default function Corporate() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className={styles.section} id="firmy">
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.label}>
              <Building2 size={16} />
              Firemné vzdelávanie
            </div>

            <h2 className={styles.title}>
              Firemné vzdelávanie{" "}
              <span className={styles.titleAccent}>angličtiny</span>
            </h2>

            <p className={styles.subtitle}>
              Investícia do zamestnancov, ktorá sa vracia každý deň.
            </p>

            <p className={styles.intro}>
              Ponúkam online kurzy angličtiny šité na mieru slovenským firmám –
              od individuálneho koučingu až po malé skupiny. Výučba prebieha cez
              virtuálnu učebňu, takže sa zamestnanci môžu pripojiť z kancelárie
              aj z domu.
            </p>
          </header>

          <div className={styles.infoGrid}>
            <article className={styles.benefitsCard}>
              <h3 className={styles.cardTitle}>Čo ponúkam firmám</h3>

              <ul className={styles.benefitsList}>
                {companyBenefits.map((item) => (
                  <li key={item} className={styles.benefitItem}>
                    <CheckCircle2 size={18} className={styles.checkIcon} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className={styles.includesCard}>
              <h3 className={styles.includesTitle}>Každá spolupráca zahŕňa</h3>

              <ul className={styles.includesList}>
                {cooperationIncludes.map((item) => (
                  <li key={item} className={styles.includesItem}>
                    <CheckCircle2 size={18} className={styles.includesIcon} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className={styles.packagesSection}>
            <div className={styles.packagesHeading}>
              <span className={styles.packagesEyebrow}>
                Možnosti spolupráce
              </span>

              <h3 className={styles.packagesTitle}>
                Vyberte si vhodný balíček
              </h3>
            </div>

            <div className={styles.packagesGrid}>
              {packages.map((packageItem) => (
                <CorporatePackageCard key={packageItem.name} {...packageItem} />
              ))}
            </div>
          </div>

          <div className={styles.cta}>
            <div className={styles.ctaText}>
              <span className={styles.ctaEyebrow}>Nezáväzná cenová ponuka</span>

              <h3 className={styles.ctaTitle}>
                Máte záujem o kurz pre Vašu firmu?
              </h3>

              <p className={styles.ctaDescription}>
                Napíšte mi počet zamestnancov, ich približnú úroveň angličtiny a
                predstavu o frekvencii výučby. Do 24 hodín pripravím návrh kurzu
                presne pre Vašu firmu.
              </p>
            </div>

            <button
              type="button"
              className={styles.ctaButton}
              onClick={() => setIsModalOpen(true)}
            >
              Chcem cenovú ponuku
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <CorporateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
