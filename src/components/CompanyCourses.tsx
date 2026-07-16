import React from "react";
import PackageCard from "./PackageCard";
import styles from "./companyCourses.module.css";

export default function CompanyCourses() {
  return (
    <>
      <section className={styles.wrapper}>
        <PackageCard
          title="Start"
          employee="1 Zamestnanec"
          classes="Online individuálne hodiny"
          time="60 min"
          price="od 30 €/hod"
          footerText="Ideálne pre manažérov alebo zamestnancov, ktorí potrebujú rýchly progres."
        ></PackageCard>
        <PackageCard
          title="Team"
          employee="2 - 5 zamestnancov"
          classes="Interaktívna skupinová výučba"
          time="30 min"
          price="od 45 €/hod za skupinu"
          footerText="Najobľúbenejšia voľba pre menšie firmy."
          variant="featured"
        ></PackageCard>
        <PackageCard
          title="Company"
          employee="6–10 zamestnancov"
          classes="Firemný kurz na mieru"
          time="pravidelné týždenné hodiny"
          price="cenová ponuka individuálne"
          footerText="Obsah prispôsobený konkrétnej firme a pracovným situáciám."
        ></PackageCard>
      </section>
    </>
  );
}
