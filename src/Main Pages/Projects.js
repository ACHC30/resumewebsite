import Header from "../Public Page/Header";
import Footer from "../Public Page/Footer";
import ProjectBox from "../Components/ProjectBox.js";
import useFadeIn from "../Components/FadeinHook.js";
import React from "react";
import projectsData from "../Data/ProjectsData.json";
import "../CSS/FadeIn.css";
import "../CSS/Projects.css";

function Projects() {
  const isVisible = useFadeIn();
  return (
    <div className={`fade-in ${isVisible ? "active" : ""}`}>
      <div className="projectlinks">
        <Header />
        <h2>This page will provide links to all my previous projects</h2>
        <h3>Projects That I Contributed or Worked On</h3>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectBox
              title={project.title}
              href={project.href}
              image={project.image}
              summary={project.summary}
            />
            <br />
          </React.Fragment>
        ))}
        <Footer />
      </div>
    </div>
  );
}

export default Projects;
