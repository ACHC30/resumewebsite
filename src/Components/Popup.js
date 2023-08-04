import React from "react";
import "../CSS/Popup.css";

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2 style={{ color: "black" }}>Sorry!</h2>
        <p style={{ color: "black" }}>
          `` This website is not fully mobile friendly yet. there will be future
          updates to fix this issue. i apologize for the inconvenience!
        </p>
        <button className="button-okay" onClick={onClose}>
          Okay
        </button>
      </div>
    </div>
  );
};

export default Popup;
