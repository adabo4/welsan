import styles from "./virtualClassroom.module.css";

const classroomItems = [
  "študen si nemusí nič inštalovať",
  "funguje priamo v prehliadači",
  "virtuálna tabuľa",
  "zdiaľanie dokumentov",
  "všetko je vytvorené pre výučbu jazykov",
  "stačí kliknúť na odkaz",
  "kamera a mikrofón sa otestujú",
  "možnosť písať, kresliť",
  "spoločné poznámky",
];

export default function VirtualClassroom() {
  return (
    <section id="virtualClassroom" className={styles.virtualClassroom}>
      <div>
        <h3 className={styles.classroomTitle}>Virtuálna učebňa</h3>

        <p className={styles.classroomBody}>
          Nie je potrebné nič inštalovať – stačí kliknúť na odkaz a pripojiť sa
          cez internetový prehliadač. Moderná virtuálna učebňa s interaktívnou
          tabuľou, zdieľaním materiálov a jednoduchým pripojením jedným
          kliknutím.
        </p>
      </div>

      <div className={styles.classroomGrid}>
        {classroomItems.map((item) => (
          <div key={item} className={styles.classroomItem}>
            <span>✅</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
