import { Route, BrowserRouter, Routes } from "react-router-dom";
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
          <Route
            path="/"
            element={<HomePage id={0} type={""} description={""} />}
          />
          <Route
            path="/home"
            element={<HomePage id={0} type={""} description={""} />}
          />
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
