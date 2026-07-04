import styles from "./contactForm.module.css";

export default function ContactForm() {
  return (
    <form className={styles.form}>
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

      <button type="submit" className={styles.submitButton}>
        Odoslať správu
      </button>
    </form>
  );
}
