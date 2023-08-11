import React from "react";
import Header from "../Public Page/Header";
import Footer from "../Public Page/Footer";
import InfoBox from "../Components/InfoBox.js";
import "../CSS/Experience.css";

function Experience() {
  const [workExp, setWorkExp] = React.useState([]);

  React.useEffect(() => {
    // Fetch the workExp data from the JSON file
    fetch(
      "https://github.com/ACHC30/resumewebsite-React.js-/raw/master/Files/workExperienceData.json"
    )
      .then((response) => response.json())
      .then((data) => setWorkExp(data))
      .catch((error) =>
        console.error("Error fetching work experience data:", error)
      );
  }, []);

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
