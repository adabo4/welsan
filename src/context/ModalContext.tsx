"use client";

import ContactModal from "@/components/ContactModal";
import { createContext, useContext, useState } from "react";

type ModalContextType = {
  openContactModal: () => void;
  closeContactModal: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        openContactModal: () => setIsContactModalOpen(true),
        closeContactModal: () => setIsContactModalOpen(false),
      }}
    >
      {children}

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used inside ModalProvider");
  }

  return context;
}
