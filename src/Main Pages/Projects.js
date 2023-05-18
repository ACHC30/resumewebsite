import Header from "../Public Page/Header";
import Footer from "../Public Page/Footer";

function Projects() {
  return (
    <div className="App">
      <Header />
      <h2>Title</h2>
      <p>this page will provide links to all my previous projects</p>
      <div className="projectlinks">
        <h3>Projetcs Owned by me</h3>
        <a href="https://github.com/ACHC30/assessment2">SDN project</a>
        <br></br>
        <a href="https://github.com/ACHC30/IFN666-Asessment-3">
          IFN666 project
        </a>
        <br></br>
        <a href="https://github.com/ACHC30/CrucibleProject">
          QUT Foundry crucible project
        </a>
        <br></br>
        <a href="https://github.com/ACHC30/CAB302_144">CAB302 project</a>
        <h3>Projetcs That i Contributed</h3>
        <a href="https://github.com/mohitbijanya/IFN649">IFN649 project</a>
        <a href="https://github.com/spencerwhc/IFN711_blockchain_project">
          IFN711 project
        </a>
        <a href="https://github.com/AbizardShafwan/CAB302_144">
          CAB302_144 project
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
