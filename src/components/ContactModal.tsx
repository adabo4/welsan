"use client";

import ContactForm from "./ContactForm";
import styles from "./contactModal.module.css";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>

        <p className={styles.kicker}>Rezervácia hodiny</p>
        <h2>Napíšte mi</h2>
        <p className={styles.text}>
          Ozvem sa vám späť a dohodneme si vhodný termín.
        </p>

        <ContactForm />
      </div>
    </div>
  );
}
