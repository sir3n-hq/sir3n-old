import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <nav className="navigation">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/map">Map</Link></li>
      <li><Link to="/who-are-we">Who Are We?</Link></li>
      <li><Link to="/submissions">Submissions</Link></li>
    </ul>
  </nav>
);

export default Navigation;
