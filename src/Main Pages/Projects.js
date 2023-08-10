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

function Projects() {
  return (
    <div className="projectlinks">
      <Header />
      <h2>This page will provide links to all my previous projects</h2>
      <h3>Projects That I Contributed or Worked On</h3>
      <a href="https://github.com/ACHC30/assessment2">
        <div className="items">
          <h1>IFN666 assessment2 project</h1>
          <img src={IFN666_2} alt="logo" />
        </div>
      </a>
      <br></br>
      <a href="https://github.com/ACHC30/IFN666-Asessment-3">
        <div className="items">
          <h1>IFN666 assessment2 project</h1>
          <img src={IFN666_3} alt="logo" />
        </div>
      </a>
      <br></br>
      <a href="https://github.com/ACHC30/CrucibleProject">
        <div className="items">
          <h1>QUT Foundry crucible project</h1>
          <img src={CrucibleProject} alt="logo" />
        </div>
      </a>
      <br></br>
      <a href="https://github.com/ACHC30/CAB302_144">
        <div className="items">
          <h1>CAB302 project</h1>
          <img src={CAB302} alt="logo" />
        </div>
      </a>
      <br></br>
      <a href="https://github.com/spencerwhc/blockchain-based-student-assessment-ledger-web-app">
        <div className="items">
          <h1>IFN711 project front end</h1>
          <img src={IFN711Front} alt="logo" />
        </div>
      </a>
      <br></br>
      <a href="https://github.com/spencerwhc/IFN711_blockchain_project">
        <div className="items">
          <h1>IFN711 project back end</h1>
          <img src={IFN711Back} alt="logo" />
        </div>
      </a>
      <br></br>
      <a href="https://github.com/mohitbijanya/IFN649">
        <div className="items">
          <h1>IFN649 project</h1>
          <img src={IFN649} alt="logo" />
        </div>
      </a>
      <br></br>
      <a href="https://github.com/AbizardShafwan/Affinity">
        <div className="items">
          <h1>IAB330 project</h1>
          <img src={IAB330} alt="logo" />
        </div>
      </a>
      <br></br>
      <Footer />
    </div>
  );
}

export default Projects;
