import React from 'react'
import IndiaRSK from './components/indiaRSK/IndiaRSK'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UaeRSK from './components/uaeRSK/UaeRSK';

const App = () => {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/in" replace />} />
        <Route path="/in" element={<IndiaRSK />} />
        <Route path="/uae" element={<UaeRSK />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
