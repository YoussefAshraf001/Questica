import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Quests from "./components/pages/Quests";
import About from "./components/pages/About";
import Categories from "./components/Categories";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/quests" element={<Quests />} />

          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
