import React from "react";
import useFadeIn from "./FadeinHook";
import InfoBoxList from "./InfoBoxList.js";
import "../CSS/InfoBox.css";
import "../CSS/FadeIn.css";

const InfoBox = ({ title, children, lists }) => {
  const isVisible = useFadeIn();
  return (
    <div className="info-box">
      <div className={`fade-in ${isVisible ? "active" : ""} animationBottom`}>
        {title && <h2>{title}</h2>}
        {children}
        <InfoBoxList lists={lists} />
      </div>
    </div>
  );
};

export default InfoBox;
