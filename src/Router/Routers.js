import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArithmeticPage from "../Pages/ArithmeticPage";
import StartPage from "../Pages/StartPage";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/arithmetic" element={<ArithmeticPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
