import React from "react";
import Header from "../Public Page/Header";
import Footer from "../Public Page/Footer";
import InfoBox from "../Components/InfoBox.js";
import workExp from "../Data/WorkExperienceData.json";
import "../CSS/Experience.css";

function Experience() {
  return (
    <div className="Experience">
      <Header />
      <h1>Work Experience</h1>
      {workExp.map((experience, index) => (
        <InfoBox
          key={index}
          title={experience.title}
          lists={experience.activity}
        >
          <h4>Company: {experience.company}</h4>
          <h4>Period: {experience.period}</h4>
        </InfoBox>
      ))}
      <Footer />
    </div>
  );
}

export default Experience;
