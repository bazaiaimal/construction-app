import { Switch } from "@chakra-ui/react";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import HomePage from "./websiteComponents/pages/Home";
import About from "./websiteComponents/pages/About";
import Contact from "./websiteComponents/pages/Contact";
import NavBar from "./websiteComponents/NavBar";
import { Services } from "./websiteComponents/pages/Services";
import Footer from "./websiteComponents/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
