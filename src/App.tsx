import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./websiteComponents/sementicTags/Header";
import { Home } from "./websiteComponents/pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
