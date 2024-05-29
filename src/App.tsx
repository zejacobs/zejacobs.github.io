import React from "react";
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";

import Home from "./Home";
import Projects from "./Projects";
import Experience from "./Experience";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Experience" element={<Experience />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
