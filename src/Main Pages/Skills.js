import Header from "../Public Page/Header";
import Footer from "../Public Page/Footer";
import useFadeIn from "../Components/FadeinHook.js";
import "../CSS/FadeIn.css";
import "../CSS/ParentChild.css";
import "../CSS/Skills.css";

function Skills() {
  const isVisible = useFadeIn();
  return (
    <div className={`fade-in ${isVisible ? "active" : ""}`}>
      <div className="skills">
        <Header />
        <div className="parent">
          <div className="child">
            <div className="list-coding">
              <ul>
                <h1>Coding Skills</h1>
                <li>C#</li>
                <li>.NET</li>
                <li>PHP</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>React Native</li>
                <li>Python</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>
          <div className="child">
            <ul>
              <h1>Technical Skills</h1>
              <li>Experience with scrum project management method</li>
              <li>Codes with a focus in object-oriented programming</li>
              <li>Ability to develop an Entity Relationship Diagram</li>
            </ul>
            <ul>
              <h1>Soft Skills</h1>
              <li>
                Strong team working skills demonstrated via lack of negative
                outcomes when working collaboratively with a team
              </li>
              <li>Adaptability shown by working as front and back-end roles</li>
              <li>
                Integrity shown by maintaining complete honesty with both my
                team and manager
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Skills;
