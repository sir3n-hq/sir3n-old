import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubmissionForm from "./components/SubmissionForm";
import Dashboard from "./components/Dashboard";
import React from "react";
import SubmissionForm from "./components/SubmissionForm";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SubmissionForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
