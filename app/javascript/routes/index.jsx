import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Referral from "../components/Referral";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </Router>
);
