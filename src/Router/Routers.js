import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArithmeticPage from "../Pages/ArithmeticPage";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/arithmetic-game" element={<ArithmeticPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
