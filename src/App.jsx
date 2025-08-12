import React from "react";
import IndiaRSK from "./components/indiaRSK/IndiaRSK";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UaeRSK from "./components/uaeRSK/UaeRSK";
import HeroCarousel from "./components/reusableComponents/AboutUs";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/in" replace />} />
        <Route path="/in" element={<IndiaRSK />} />
        <Route path="/uae" element={<UaeRSK />} />
        <Route path="/about" element={<HeroCarousel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
