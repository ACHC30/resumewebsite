import React from "react";
import "../Popup.css";

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2>Popup Content</h2>
        <p>This is the content of the popup.</p>
      </div>
    </div>
  );
};

export default Popup;
