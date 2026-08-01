import { ArrowRight, CheckCircle2, Download, FileText } from "lucide-react";

import styles from "./materials.module.css";

const materials = [
  {
    title: "Present Continous – cvičenia",
    level: "B1 – B2",
    pages: "4 strany",
    file: "/materials/present_continous_practise.pdf",
  },
  {
    title: "Present Simple - gramatika",
    level: "B1 – B2",
    pages: "5 strán",
    file: "/materials/Present_simle_grammar_explained.pdf",
  },
  {
    title: "Najčastejšie chyby v angličtine",
    level: "A2 – B1",
    pages: "3 strany",
    file: "/materials/najcastejsie-chyby.pdf",
  },
];

const ctaItems = [
  "Materiály prispôsobené vašej úrovni",
  "Praktické cvičenia z reálnych situácií",
  "Pravidelná spätná väzba a vysvetlenie chýb",
];

export default function Materials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.badge}>Materiály zdarma</div>

          <h2 className={styles.title}>Stiahnite si pracovné materiály</h2>

          <p className={styles.description}>
            Precvičte si angličtinu pomocou praktických pracovných listov, ktoré
            môžete používať doma, v práci alebo počas vyučovania.
          </p>
        </header>

        <div className={styles.materialGrid}>
          {materials.map((material) => (
            <article key={material.title} className={styles.materialCard}>
              <div className={styles.iconBox}>
                <FileText size={26} />
              </div>

              <div className={styles.tags}>
                <span className={styles.levelTag}>{material.level}</span>
                <span className={styles.pagesTag}>{material.pages}</span>
              </div>

              <h3 className={styles.materialTitle}>{material.title}</h3>

              <a
                href={material.file}
                download
                className={styles.downloadButton}
              >
                <Download size={15} />
                Stiahnuť PDF
              </a>
            </article>
          ))}
        </div>

        <div className={styles.cta}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaText}>
              <p className={styles.ctaLabel}>Chcete napredovať rýchlejšie?</p>

              <h3 className={styles.ctaTitle}>
                Na hodinách získate materiály pripravené priamo pre vás
              </h3>

              <ul className={styles.ctaList}>
                {ctaItems.map((item) => (
                  <li key={item} className={styles.ctaItem}>
                    <CheckCircle2 size={17} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.divider} />

            <div className={styles.ctaButtonWrapper}>
              <a
                href="mailto:infowelsan@gmail.com"
                className={styles.ctaButton}
              >
                Mám záujem o kurz
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
