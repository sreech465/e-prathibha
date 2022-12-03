import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoryOfExams from "./CategoryOfExams";
import Packageanu from "./Packageanu";
import Payment from "./Payment";
import Result from "./Result";
import Summary from "./Summary";

const Sidebar = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CategoryOfExams />} />
        <Route path="/package" element={<Packageanu />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/result" element={<Result />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Sidebar;
