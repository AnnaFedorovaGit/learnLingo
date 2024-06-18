import { useState } from 'react';

interface Modal {
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

const useModal = ():Modal => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return { isModalOpen, openModal, closeModal };
};


export default useModal;