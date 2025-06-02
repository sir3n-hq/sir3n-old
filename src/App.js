import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubmissionForm from "./components/SubmissionForm";
import Dashboard from "./components/Dashboard";
import React from "react";
import "./App.css";
import { LoadScript } from "@react-google-maps/api";

const GOOGLE_API_KEY = "AIzaSyC_xCYVOeiOQcf44wR2V0supxqRsQekfNQ";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SubmissionForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>

    <LoadScript googleMapsApiKey={GOOGLE_API_KEY} libraries={["places"]}>
        <SubmissionForm />
    </LoadScript>
  );
}

export default App;
