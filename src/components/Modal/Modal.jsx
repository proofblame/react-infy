import React from "react";
import "./modal.css";

function Modal({ active, children, className }) {
  return (
    <div
      className={active ? `modal ${className} active` : `modal ${className}`}
    >
      <div className={active ? "modal__content active" : "modal__content"}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
