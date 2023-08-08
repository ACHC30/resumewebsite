import Header from "../Public Page/Header";
import Footer from "../Public Page/Footer";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
import InfoBox from "../Components/InfoBox.js";

function Experience() {
  const workExp = [
    {
      company: "Tobacco SG",
      title: "Sales Attendant",
      period: "Sep 2022 to now",
      activity: [
        "Demonstrated efficiency in financial transaction using POS with 0% error",
        "Exceed customer satisfaction with effective communication",
        "Created a proper documentation by writing reports in the given format with 100% consistency.",
        "Demonstrated effective project management skills by using company documentation templates. ",
      ],
    },
    {
      company: "MITRA AGUNG",
      title: "IT Freelancer",
      period: " Jan 2017 to now",
      activity: [
        "Established proper data design and structure by using excel files",
        "Composed a small database using google drive for cost effective data storing",
        "Designing the data design and structure for the software",
        "Prototyped a solution for the problem using a third-party software",
      ],
    },
    {
      company: "QUT",
      title: "Blockchain-Based Assessment Ledger Website",
      period: "Jan 2022 to Jun 2022",
      activity: [
        "In this website, student can generate a report that can show all the skills they have learn from the courses and all the data will be stored in the blockchain to ensure security.",
        "Demonstrated skills in JavaScript front-end development",
        "Achieved success in testing SDN using Linux virtual OS",
        "Used Trello for quality control",
      ],
    },
    {
      company: "QUT",
      title: "Gamified Entrepreneur Dashboard",
      period: "Jan 2019 to Jan 2020",
      activity: [
        "Created a dashboard that can deliver an interesting gamification process for the participants that wants to hold an entrepreneurship program and allows the staff to track and analyze the experiences of the participants",
        "Designed front end of the website with HTML and CSS",
        "Implemented back end of the website with Phyton",
        "Organized workflow using SCRUM method",
        "Documented the coding Done on the project",
        "Designed database using SQL",
        "Fixed bugs during the development of the dashboard.",
      ],
    },
    {
      company: "UBAYA (University Of Surabaya)",
      title: "Final Exams Scheduling Website",
      period: "Jan 2018 to Jan 2019",
      activity: [
        "Created a website that is used to schedule final exam for the students in UBAYA",
        "Implemented PHP for backend development ",
        "Designed the front-end using HTML",
      ],
    },
    {
      company: "YESTERDAY’S THRIFT SHOP",
      title: "Volunteer",
      period: "Sep 2022 to Mar 2023",
      activity: [
        "Handles customer service",
        "Handles Stock Rotation",
        "Handles Stock pricing",
        "Handles Merchandising",
      ],
    },
  ];
  return (
    <div className="App">
      <Header />
      <h1>Work Experience</h1>
      {workExp.map((experience, index) => (
        <InfoBox
          key={index}
          title={experience.title}
          lists={experience.activity}
        >
          <p>{experience.company}</p>
          <p>{experience.period}</p>
        </InfoBox>
      ))}
      <Footer />
    </div>
  );
}

export default Experience;
