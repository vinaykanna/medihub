import React from "react";
import closeIcon from "@assets/images/close.svg";
import { twJoin } from "tailwind-merge";

const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div
      className={twJoin(
        "fixed inset-0 z-50 flex items-center justify-center p-4",
        isOpen && "animate-fadeIn"
      )}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      <div
        className={twJoin(
          "relative bg-white rounded-3xl shadow-xl w-full max-w-lg transform",
          isOpen && "animate-scaleIn"
        )}
      >
        <div className="flex items-center justify-between py-4 px-7 border-b">
          <h3 className="text-[22px] text-secondary-solid font-bold font-nunito-bold">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <img src={closeIcon} alt="" className="w-4 h-4" />
          </button>
        </div>
        <div className="p-7">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
