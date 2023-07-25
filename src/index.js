import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./CSS/index.css";

//main pages
import Home from "./Main Pages/Home";
import Contact from "./Main Pages/Contact";
import Education from "./Main Pages/Education";
import Experience from "./Main Pages/Experience";
import Skills from "./Main Pages/Skills";
import Summary from "./Main Pages/Summary";
import Projects from "./Main Pages/Projects";

// import ReactSkills from "./Main Pages/SkillsWithReact";
//skills with react pages
// import API from "./Skills With React Pages/API";
// import Animation from "./Skills With React Pages/Animation";
// import Client from "./Skills With React Pages/Client";
// import Database from "./Skills With React Pages/Database";
// import DateTime from "./Skills With React Pages/DateTime";
// import Files from "./Skills With React Pages/Files";
// import Server from "./Skills With React Pages/Server";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Education" element={<Education />}></Route>
        <Route path="/Experience" element={<Experience />}></Route>
        <Route path="/Skills" element={<Skills />}></Route>
        <Route path="/Summary" element={<Summary />}></Route>
        <Route path="/Projects" element={<Projects />}></Route>

        {/* <Route path="/ReactSkills" element={<ReactSkills />}></Route> */}
        {/* React Skills Pages */}
        {/* <Route path="/API" element={<API />}></Route>
        <Route path="/Animation" element={<Animation />}></Route>
        <Route path="/Client" element={<Client />}></Route>
        <Route path="/Database" element={<Database />}></Route>
        <Route path="/DateTime" element={<DateTime />}></Route>
        <Route path="/Files" element={<Files />}></Route>
        <Route path="/Server" element={<Server />}></Route> */}
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
