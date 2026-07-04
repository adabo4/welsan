"use client";
import { useState } from "react";
import styles from "./contactForm.module.css";
import { Check } from "lucide-react";
import Link from "next/link";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [messageText, setMessageText] = useState("");
  const [gdprAccepted, setGdprAccepted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget; // 👈 toto pridaj hneď hore
    setStatus("loading");
    setMessageText("");

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    if (!gdprAccepted) {
      setStatus("error");
      setMessageText(
        "Pred odoslaním je potrebné súhlasiť so spracovaním osobných údajov.",
      );
      return;
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      setStatus("error");
      setMessageText(result.message || "Niečo sa pokazilo.");
      return;
    }

    setStatus("success");
    setMessageText("Ďakujeme, správa bola odoslaná. Ozveme sa vám čoskoro.");
    form.reset();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label>
          Meno a priezvisko
          <input type="text" name="name" placeholder="Vaše meno" required />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="vas@email.sk"
            required
          />
        </label>
      </div>

      <label>
        Telefónne číslo
        <input type="tel" name="phone" placeholder="+421 ..." />
      </label>

      <label>
        Správa
        <textarea
          name="message"
          rows={5}
          placeholder="Napíšte, s čím vám môžem pomôcť..."
          required
        />
      </label>

      <div
        className={styles.checkboxWrapper}
        onClick={() => setGdprAccepted((prev) => !prev)}
      >
        <div
          className={`${styles.checkbox} ${
            gdprAccepted ? styles.checkboxChecked : ""
          }`}
        >
          {gdprAccepted && <Check size={14} strokeWidth={3} />}
        </div>

        <p className={styles.checkboxText}>
          Súhlasím so spracovaním osobných údajov. Viac informácií nájdete v{" "}
          <Link href="/gdpr" target="_blank" rel="noopener noreferrer">
            Zásadách ochrany osobných údajov.
          </Link>
          .
        </p>
      </div>

      <button
        disabled={!gdprAccepted || status === "loading"}
        type="submit"
        className={styles.submitButton}
      >
        {status === "loading" ? "Odosielam..." : "Odoslať správu"}
      </button>

      {messageText && (
        <p
          className={
            status === "success" ? styles.successMessage : styles.errorMessage
          }
        >
          {messageText}
        </p>
      )}
    </form>
  );
}
