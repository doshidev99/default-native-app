import { useState } from 'react';

export const useModal = (initialMode = false) => {
  const [modalOpen, setModalOpen] = useState(initialMode);
  const toggle = () => setModalOpen(((preState) => !preState));
  return [modalOpen, setModalOpen, toggle];
};
