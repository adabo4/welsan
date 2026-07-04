"use client";
import React from "react";
import styles from "./ctaButton.module.css";
import { useModal } from "@/context/ModalContext";

type ContactButtonProps = {
  btnText: string;
  icon?: React.ReactElement;
  classname?: string;
};

export default function ContactButton({
  btnText,
  icon,
  classname,
}: ContactButtonProps) {
  const { openContactModal } = useModal();
  return (
    <button
      onClick={openContactModal}
      className={`${styles.reserveButton} ${classname ?? ""}`}
    >
      {btnText} {icon}
    </button>
  );
}
