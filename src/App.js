import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Visualization from "./components/Resume/Visual";
import About1 from "./components/About/About copy";
import About2 from "./components/About/About copy 2";
import Map from "./components/About/map";
import About3 from "./components/About/About copy 3";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  HashRouter,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/station2" element={<About1 />} />
          <Route path="/station3" element={<About2 />} />
          <Route path="/station1" element={<About />} />
          <Route path="/station4" element={<About3 />} />
          <Route path="/visualization" element={<Visualization />} />
          <Route path="/map" element={<Map />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
