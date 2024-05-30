import React from "react";
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";

import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Experience from "./Experience";
import Navbar from "./Navbar";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Experience" element={<Experience />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
