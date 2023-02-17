import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Referral from "../components/Referral";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Referral />} />
    </Routes>
  </Router>
);
