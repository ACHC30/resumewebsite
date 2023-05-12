import Header from "../Public Page/Header";
import Footer from "../Public Page/Footer";

function Projects() {
  return (
    <div className="App">
      <Header />
      <h2>Title</h2>
      <p>this page will provide links to all my previous projects</p>
      <div className="projectlinks">
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
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
