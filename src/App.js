import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MapPage from './pages/MapPage';
import AboutPage from './pages/AboutPage';
import SubmissionsPage from './pages/SubmissionsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/submissions" element={<SubmissionsPage />} />
    </Routes>
  );
}

export default App;