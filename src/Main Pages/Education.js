import Header from "../Public Page/Header";
import Footer from "../Public Page/Footer";
import InfoBox from "../Components/InfoBox.js";
import education from "../Data/EducationData.json";
import "../CSS/Education.css";

function Education() {
  return (
    <div className="Education">
      <Header />
      <h1>Degrees and Training</h1>
      {education.map((education, index) => (
        <InfoBox
          key={index}
          title={education.degree}
          lists={education.description}
        >
          <h4>University: {education.university}</h4>
          <h4>Period: {education.date}</h4>
          <h4>GPA: {education.gpa}</h4>
        </InfoBox>
      ))}
      <Footer />
    </div>
  );
}

export default Education;
