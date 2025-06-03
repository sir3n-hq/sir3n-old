import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="flex space-x-6 text-lg py-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/map" className="hover:underline">Map</Link>
      <Link to="/about" className="hover:underline">Who Are We?</Link>
      <Link to="/submissions" className="hover:underline">Submissions</Link>
    </nav>
  );
};

export default Navigation;