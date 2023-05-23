import Header from "../Public Page/Header";
import Footer from "../Public Page/Footer";

function Projects() {
  return (
    <div className="App">
      <Header />
      <h2>This page will provide links to all my previous projects</h2>
      <div className="projectlinks">
        {/* Owned */}
        <h3>Projetcs Owned by me</h3>
        <a href="https://github.com/ACHC30/assessment2">
          <div className="items">
            <p>SDN project</p>
          </div>
        </a>
        <br></br>
        <a href="https://github.com/ACHC30/IFN666-Asessment-3">
          <div className="items">
            <p>IFN666 project</p>
          </div>
        </a>
        <br></br>
        <a href="https://github.com/ACHC30/CrucibleProject">
          <div className="items">
            <p>QUT Foundry crucible project</p>
          </div>
        </a>
        <br></br>
        <a href="https://github.com/ACHC30/CAB302_144">
          <div className="items">
            <p>CAB302 project</p>
          </div>
        </a>
        {/* contributed */}
        <h3>Projects That i Contributed</h3>
        <a href="https://github.com/mohitbijanya/IFN649">
          <div className="items">
            <p>IFN649 project</p>
          </div>
        </a>
        <br></br>
        <a href="https://github.com/spencerwhc/IFN711_blockchain_project">
          <div className="items">
            <p>IFN711 project</p>
          </div>
        </a>
        <br></br>
        <a href="https://github.com/AbizardShafwan/CAB302_144">
          <div className="items">
            <p>CAB302_144 project</p>
          </div>
        </a>
        <br></br>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
