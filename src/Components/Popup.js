import React from "react";
import "../CSS/Popup.css";

const Popup = ({ isOpen, onClose, title, context }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2 style={{ color: "black", textAlign: "center" }}>{title}</h2>
        <p style={{ color: "black", textAlign: "center" }}>{context}</p>
        <button className="button-okay" onClick={onClose}>
          Okay
        </button>
      </div>
    </div>
  );
};

export default Popup;
