import { useState } from "react";
import { Modal } from "../component/Modal";

//모달 컨트롤 커스텀 훅
export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return { Modal, isOpen, closeModal, openModal };
};
