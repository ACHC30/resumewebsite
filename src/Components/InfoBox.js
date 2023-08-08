import React from "react";
import InfoBoxList from "./InfoBoxList.js";
import "../CSS/InfoBox.css";

const InfoBox = ({ title, children, lists }) => {
  return (
    <div className="info-box">
      {title && <h2>{title}</h2>}
      {children}
      <InfoBoxList lists={lists} />
    </div>
  );
};

export default InfoBox;
