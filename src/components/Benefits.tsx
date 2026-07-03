import Image from "next/image";
import book from "../../public/images/book.svg";
import house from "../../public/images/house.svg";
import clock from "../../public/images/clock.svg";
import target from "../../public/images/terc.svg";
import styles from "./benefits.module.css";

const benefits = [
  {
    icon: book,
    title: "Materiály zdarma",
    text: "Kvalitné materiály bez ďalších poplatkov",
  },
  {
    icon: house,
    title: "Odkiaľkoľvek",
    text: "Učte sa pohodlne z domova alebo odkiaľkoľvek",
  },
  {
    icon: clock,
    title: "Kedykoľvek",
    text: "Flexibilné termíny prispôsobené vášmu rozvrhu",
  },
  {
    icon: target,
    title: "Individuálny prístup",
    text: "Hodiny prispôsobené presne vám a vašim cieľom",
  },
];

export default function Benefits() {
  return (
    <section className={styles.benefitsWrapper}>
      {benefits.map((item, index) => (
        <article className={styles.benefitCard} key={item.title}>
          <div className={styles.iconCircle}>
            <Image src={item.icon} alt="" width={70} height={70} />
          </div>

          <h3>{item.title}</h3>
          <p>{item.text}</p>

          {index !== benefits.length - 1 && <span className={styles.divider} />}
        </article>
      ))}
    </section>
  );
}
