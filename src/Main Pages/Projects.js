import Header from "../Public Page/Header";
import Footer from "../Public Page/Footer";
import IFN666_2 from "../Images/IFN666_assessment2.jpg";
import IFN666_3 from "../Images/IFN666_assessment3.jpg";
import CrucibleProject from "../Images/CrucibleProject.jpg";
import CAB302 from "../Images/CAB302.jpg";
import IFN711Front from "../Images/IFN711_frontend.jpg";
import IFN711Back from "../Images/IFN711_backend.jpg";
import IAB330 from "../Images/IAB330.jpg";
import IFN649 from "../Images/IFN649.jpg";
import "../CSS/Projects.css";
import ProjectBox from "../Components/ProjectBox";

function Projects() {
  return (
    <div className="projectlinks">
      <Header />
      <h2>This page will provide links to all my previous projects</h2>
      <h3>Projects That I Contributed or Worked On</h3>
      <ProjectBox
        title={"IFN666 assessment 2 project"}
        href={"https://github.com/ACHC30/assessment2"}
        image={IFN666_2}
        summary={
          "In the course of this endeavor, our team has successfully developed a website designed to monitor and analyze stock market fluctuations through the integration of various APIs."
        }
      />
      <br></br>
      <ProjectBox
        title={"IFN666 assessment 3 project"}
        href={"https://github.com/ACHC30/IFN666-Asessment-3"}
        image={IFN666_3}
        summary={
          "This is the extension of IFN666 assessment 2 project. Within this project, our focus has been to craft a refined mobile rendition of the website by using React Native technology"
        }
      />
      <br></br>
      <ProjectBox
        title={"QUT Foundry crucible project"}
        href={"https://github.com/ACHC30/CrucibleProject"}
        image={CrucibleProject}
        summary={
          "In this project, Our team created a dashboard that can deliver an interesting gamification process for the participants that wants to hold an entrepreneurship program and allows the staff to track and analyze the experiences of the participants"
        }
      />
      <br></br>
      <ProjectBox
        title={"CAB302 project"}
        href={"https://github.com/ACHC30/CAB302_144"}
        image={CAB302}
        summary={
          "In this project, our team has successfully to showcase billboards through the Billboard Viewer application. this application encompass the ability to establish and modify billboards using the Billboard Control Panel application, schedule billboard displays, manage user profiles and permissions, and enhance security measures by enabling password changes and feature restrictions based on user permissions."
        }
      />
      <br></br>
      <ProjectBox
        title={"IFN711 project front end"}
        href={
          "https://github.com/spencerwhc/blockchain-based-student-assessment-ledger-web-app"
        }
        image={IFN711Front}
        summary={
          "In this website, student can generate a report that can show all the skills they have learn from the courses and all the data will be stored in the blockchain to ensure security. The provided GitHub repository pertains specifically to the front-end facet of this multifaceted undertaking."
        }
      />
      <br></br>
      <ProjectBox
        title={"IFN711 project back end"}
        href={"https://github.com/spencerwhc/IFN711_blockchain_project"}
        image={IFN711Back}
        summary={
          "In this website, student can generate a report that can show all the skills they have learn from the courses and all the data will be stored in the blockchain to ensure security. The provided GitHub repository pertains specifically to the back-end facet of this multifaceted undertaking."
        }
      />
      <br></br>
      <ProjectBox
        title={"IFN649 project"}
        href={"https://github.com/mohitbijanya/IFN649"}
        image={IFN649}
        summary={
          "This endeavor entailed our team's diligent efforts to conceptualize and fabricate an IoT device with the primary function of detecting smoke. This device is adeptly designed to promptly alert users via their mobile phones, effectively amplifying safety measures."
        }
      />
      <br></br>
      <ProjectBox
        title={"IAB330 project"}
        href={"https://github.com/AbizardShafwan/Affinity"}
        image={IAB330}
        summary={
          "In this project, we address COVID-19's impact on education by introducing Affinity, a mobile app. It enhances student-staff communication, group discussions, and scheduling to combat isolation and improve learning outcomes."
        }
      />
      <br></br>
      <Footer />
    </div>
  );
}

export default Projects;
