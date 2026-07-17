"use client";
import { CalendarDays, MessageCircle, ShieldCheck, Target } from "lucide-react";
import styles from "../pricingCta.module.css";

const bottomItems = [
  { icon: ShieldCheck, text: "Bezpečné online prostredie" },
  { icon: CalendarDays, text: "Flexibilné termíny podľa teba" },
  { icon: Target, text: "Zamerané na tvoje ciele" },
  { icon: MessageCircle, text: "Konverzácia, gramatika, slovná zásoba" },
];

export default function PricingBottomItems() {
  return (
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
  );
}
