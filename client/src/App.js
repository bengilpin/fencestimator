import "./App.css";
import Form from "./components/Form/Form";
import BuildFence from "./components/BuildFence/BuildFence";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import Navbar from "./components/Navbar/Navbar";
import ContactPage from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/estimator" element={<BuildFence />} />
            <Route path="/howitworks" element={<HowItWorks />} />
            <Route path="/contact" element={<ContactPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
