import React from "react";
import useFadeIn from "./FadeinHook";

import "../CSS/Projects.css";
import "../CSS/FadeIn.css";

const ProjectBox = ({ title, href, image, summary }) => {
  const isVisible = useFadeIn();
  return (
    <div className="items">
      <div className={`fade-in ${isVisible ? "active" : ""} animationBottom`}>
        <a href={href}>
          <h1>{title}</h1>
          <img src={image} alt="logo" />
          <p>{summary}</p>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
