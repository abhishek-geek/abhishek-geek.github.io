import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// import Introduction from './components/Introduction'; // Create this component
// import Experiences from './components/Experiences'; // Create this component
// import Education from './components/Education'; // Create this component
// import Skills from './components/Skills'; // Create this component
// import Projects from './components/Projects'; // Create this component
// import Contact from './components/Contact'; // Create this component
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";

/**
 * 
 *        {/* <Router>
        <Navbar />
        <About />
      <Experience /> 
        <Routes>
        <Route path="/" element={<About />} />
        <Route path="/experiences" element={<Experience />} />
         <Route path="/education" component={Education} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} /> 
              </Routes>
       </Router> }
 */

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Experience />
      <Skills />
    </div>
  );
}

export default App;
