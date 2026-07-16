"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

import CorporateContactForm from "./CorporateContactForm";
import styles from "./corporateModal.module.css";

type CorporateModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CorporateModal({
  isOpen,
  onClose,
}: CorporateModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay} onMouseDown={onClose} role="presentation">
      <div
        className={styles.modal}
        onMouseDown={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="corporate-modal-title"
      >
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Zatvoriť formulár"
        >
          <X size={22} />
        </button>

        <div className={styles.modalHeader}>
          <span className={styles.eyebrow}>Nezáväzná ponuka</span>

          <h2 id="corporate-modal-title" className={styles.title}>
            Požiadajte o cenovú ponuku
          </h2>

          <p className={styles.subtitle}>
            Vyplňte krátky formulár a ozvem sa Vám.
          </p>
        </div>

        <CorporateContactForm />
      </div>
    </div>
  );
}
