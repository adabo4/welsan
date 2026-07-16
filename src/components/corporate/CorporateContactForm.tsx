"use client";

import { useState } from "react";
import {
  Building2,
  CalendarDays,
  Check,
  ChevronDown,
  Mail,
  Users,
} from "lucide-react";
import Link from "next/link";

import styles from "./corporateModal.module.css";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function CorporateContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [messageText, setMessageText] = useState("");
  const [gdprAccepted, setGdprAccepted] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!gdprAccepted) {
      setStatus("error");
      setMessageText(
        "Pred odoslaním je potrebné súhlasiť so spracovaním osobných údajov.",
      );
      return;
    }

    setStatus("loading");
    setMessageText("");

    const formData = new FormData(form);

    const data = {
      formType: "corporate",
      companyName: formData.get("companyName"),
      name: formData.get("contactName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      employeeCount: formData.get("employeeCount"),
      englishLevel: formData.get("englishLevel"),
      frequency: formData.get("frequency"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessageText(
          result.message || "Cenovú ponuku sa nepodarilo odoslať.",
        );
        return;
      }

      setStatus("success");
      setMessageText(result.message);
      form.reset();
      setGdprAccepted(false);
    } catch {
      setStatus("error");
      setMessageText(
        "Nepodarilo sa spojiť so serverom. Skúste to, prosím, znova.",
      );
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <span className={styles.fieldLabel}>
          Názov firmy <span aria-hidden="true">*</span>
        </span>

        <div className={styles.inputWrapper}>
          <input
            type="text"
            name="companyName"
            placeholder="Zadajte názov vašej firmy"
            required
          />

          <Building2
            size={20}
            className={styles.fieldIcon}
            aria-hidden="true"
          />
        </div>
      </label>

      <div className={styles.formRow}>
        <label className={styles.field}>
          <span className={styles.fieldLabel}>
            Kontaktná osoba <span aria-hidden="true">*</span>
          </span>

          <input
            type="text"
            name="contactName"
            placeholder="Meno a priezvisko"
            required
          />
        </label>

        <label className={styles.field}>
          <span className={styles.fieldLabel}>
            E-mail <span aria-hidden="true">*</span>
          </span>

          <input
            type="email"
            name="email"
            placeholder="vas@email.sk"
            required
          />
        </label>
      </div>

      <label className={styles.field}>
        <span className={styles.fieldLabel}>Telefónne číslo</span>

        <input type="tel" name="phone" placeholder="+421 ..." />
      </label>

      <label className={styles.field}>
        <span className={styles.fieldLabel}>
          Počet zamestnancov, ktorí sa budú vzdelávať{" "}
          <span aria-hidden="true">*</span>
        </span>

        <div className={styles.inputWrapper}>
          <input
            type="number"
            name="employeeCount"
            min="1"
            placeholder="napr. 3, 5, 10..."
            required
          />

          <Users size={21} className={styles.fieldIcon} aria-hidden="true" />
        </div>
      </label>

      <label className={styles.field}>
        <span className={styles.fieldLabel}>
          Približná úroveň angličtiny <span aria-hidden="true">*</span>
        </span>

        <div className={styles.selectWrapper}>
          <select name="englishLevel" defaultValue="" required>
            <option value="" disabled>
              Vyberte úroveň
            </option>

            <option value="A1 – začiatočník">A1 – začiatočník</option>

            <option value="A2 – mierne pokročilý">A2 – mierne pokročilý</option>

            <option value="B1 – stredne pokročilý">
              B1 – stredne pokročilý
            </option>

            <option value="B2 – vyššie pokročilý">B2 – vyššie pokročilý</option>

            <option value="C1 – pokročilý">C1 – pokročilý</option>

            <option value="Rôzne úrovne">Zamestnanci majú rôzne úrovne</option>

            <option value="Neviem">
              Neviem – potrebujeme vstupné otestovanie
            </option>
          </select>

          <ChevronDown
            size={21}
            className={styles.selectIcon}
            aria-hidden="true"
          />
        </div>
      </label>

      <label className={styles.field}>
        <span className={styles.fieldLabel}>
          Predstava o frekvencii výučby <span aria-hidden="true">*</span>
        </span>

        <div className={styles.inputWrapper}>
          <input
            type="text"
            name="frequency"
            placeholder="napr. 1× týždenne, 2× týždenne..."
            required
          />

          <CalendarDays
            size={21}
            className={styles.fieldIcon}
            aria-hidden="true"
          />
        </div>
      </label>

      <label className={styles.field}>
        <span className={styles.fieldLabel}>
          Správa / ďalšie informácie
          <span className={styles.optional}> (voliteľné)</span>
        </span>

        <textarea
          name="message"
          rows={4}
          placeholder="Uveďte, prosím, ak máte špecifické požiadavky alebo ciele výučby."
        />
      </label>

      <label className={styles.checkboxWrapper}>
        <input
          type="checkbox"
          className={styles.nativeCheckbox}
          checked={gdprAccepted}
          onChange={(event) => setGdprAccepted(event.target.checked)}
        />

        <span
          className={`${styles.checkbox} ${
            gdprAccepted ? styles.checkboxChecked : ""
          }`}
          aria-hidden="true"
        >
          {gdprAccepted && <Check size={14} strokeWidth={3} />}
        </span>

        <span className={styles.checkboxText}>
          Súhlasím so spracovaním osobných údajov. Viac informácií nájdete v{" "}
          <Link href="/gdpr" target="_blank" rel="noopener noreferrer">
            Zásadách ochrany osobných údajov
          </Link>
          .
        </span>
      </label>

      <button
        type="submit"
        className={styles.submitButton}
        disabled={!gdprAccepted || status === "loading"}
      >
        <Mail size={21} />

        {status === "loading" ? "Odosielam..." : "Chcem cenovú ponuku"}
      </button>

      {messageText && (
        <p
          className={
            status === "success" ? styles.successMessage : styles.errorMessage
          }
          role="status"
        >
          {messageText}
        </p>
      )}

      <p className={styles.securityMessage}>
        Vaše údaje sú u mňa v bezpečí a nebudem ich zdieľať.
      </p>
    </form>
  );
}
