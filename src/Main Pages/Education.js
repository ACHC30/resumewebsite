import Header from "../Public Page/Header";
import Footer from "../Public Page/Footer";
import InfoBox from "../Components/InfoBox.js";
import "../CSS/Education.css";

function Education() {
  const education = [
    {
      degree: "BACHELOR OF SCIENCE: COMPUTER SCIENCE AND PROGRAMMING",
      university: "University of Surabaya, Indonesia",
      date: "Jan 2020 - Aug 2021",
      gpa: "Average GPA of 3.8 out of 4.00",
      description: [
        "Average GPA of 3.8 for 3 consecutive years",
        "International double degree program",
        "Degree continues at Queensland University of Technology.",
      ],
    },
    {
      degree: "BACHELOR OF SCIENCE: COMPUTER SCIENCE AND PROGRAMMING",
      university: "Queensland University of Technology, Brisbane",
      date: "Jan 2020 - Aug 2021",
      gpa: "Average GPA of 6.25 out of 7.00",
      description: [
        "Completed the last semesters of the dual degree",
        "Average GPA of 6.25 out of 7.00 for the bachelor of information of technology (QUT standard's).",
        "Awarded International Merit Scholarship at Queensland University of Technology",
      ],
    },
    {
      degree: "MASTER OF SCIENCE: COMPUTER SCIENCE AND PROGRAMMING",
      university: "Queensland University of Technology, Brisbane",
      date: "Aug 2021 - Jul 2022",
      gpa: "Average GPA of 6.05 out of 7.00",
      description: [
        "Average GPA of 6.05 out of 7.00 for the bachelor of information of technology (QUT standard's).",
        "Awarded International Merit Scholarship at Queensland University of Technology",
        "Graduated with no problems",
      ],
    },
    {
      degree: "ACS Professional Year Program Certificate",
      university: "ACS Professional Year Program in Computer Science/ICT",
      date: "Mar 2022 - Ongoing",
      gpa: "N/A",
      description: [
        "Perfect attendence record, no absent in all courses",
        "Perfect task submmision, no outstanding submission",
        "Attended 15 hours of ACS netwroking events, both technical and non-technical",
      ],
    },
  ];
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
