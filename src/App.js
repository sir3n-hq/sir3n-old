import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import LandingPage from './pages/LandingPage';
import MapPage from './pages/MapPage';
import WhoAreWePage from './pages/WhoAreWePage';
import SubmissionsPage from './pages/SubmissionsPage';
import './App.css';

const App = () => (
  <Router>
    <div className="app">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/who-are-we" element={<WhoAreWePage />} />
          <Route path="/submissions" element={<SubmissionsPage />} />
        </Routes>
      </main>
    </div>
  </Router>
);

export default App;