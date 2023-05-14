import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import Contact from "./Main Pages/Contact";
import Education from "./Main Pages/Education";
import Experience from "./Main Pages/Experience";
import Skills from "./Main Pages/Skills";
import Summary from "./Main Pages/Summary";
import ReactSkills from "./Main Pages/SkillsWithReact";
import Projects from "./Main Pages/Projects";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Education" element={<Education />}></Route>
        <Route path="/Experience" element={<Experience />}></Route>
        <Route path="/Skills" element={<Skills />}></Route>
        <Route path="/Summary" element={<Summary />}></Route>
        <Route path="/Projects" element={<Projects />}></Route>

        <Route path="/ReactSkills" element={<ReactSkills />}></Route>
        {/* React Skills Pages */}
        
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
