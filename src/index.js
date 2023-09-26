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
import Projects from "./Main Pages/Projects";
import FeedBack from "./Main Pages/Feedback";

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
        <Route path="/Projects" element={<Projects />}></Route>
        <Route path="/FeedBack" element={<FeedBack />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
