// src/Modal.tsx
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  size?: "custom-sm" | "custom-md" | "custom-lg" | "custom-xl"; // Custom size options
}

const sizeClasses = {
  "custom-sm": "max-w-custom-sm max-h-custom-sm", // Custom small size
  "custom-md": "max-w-custom-md max-h-custom-md", // Custom medium size
  "custom-lg": "max-w-custom-lg max-h-custom-lg", // Custom large size
  "custom-xl": "max-w-custom-xl max-h-custom-xl", // Custom extra-large size
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  size = "custom-md",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div
        className={`bg-white p-6 rounded-lg shadow-lg z-10 ${sizeClasses[size]}`}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 px-3 py-1 bg-red-500 text-white rounded-lg"
        >
          Close
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
