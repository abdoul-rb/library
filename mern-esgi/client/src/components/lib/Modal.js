import React from "react";
import "./Modal.css";

function Modal({ theme, title, open, onClose, children }) {
  const styleModal = {
    backgroundColor: theme === "dark" ? "black" : "white",
    borderColor: theme === "dark" ? "white" : "black",
    color: theme === "dark" ? "white" : "black",
  };
  return (
    open && (
      <>
        <div className="overlay" onClick={onClose} />
        <div className="modal" style={styleModal}>
          <span className="modal-title">
            <h2>{title}</h2>
            <button onClick={onClose}> Close </button>
          </span>
          <div className="modal-content">{children}</div>
        </div>
      </>
    )
  );
}

export default Modal;
