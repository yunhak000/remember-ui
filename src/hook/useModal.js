import { useState } from "react";
import { Modal } from "../component/Modal";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return { Modal, isOpen, closeModal, openModal };
};
