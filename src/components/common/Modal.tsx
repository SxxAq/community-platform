import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setIsModalOpen(false);
    onClose();
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-40 flex items-center justify-center">
      <div className="relative bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg">
        <div className="flex justify-between items-center border-b p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            onClick={handleClose}
            className="text-black close-modal"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
