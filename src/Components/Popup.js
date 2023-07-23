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
        <h2 style={{ color: "black" }}>Sorry!</h2>
        <p style={{ color: "black" }}>This website is not mobile friendly.</p>
      </div>
    </div>
  );
};

export default Popup;
