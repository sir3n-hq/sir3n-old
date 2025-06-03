import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <Navigation />
      <h1 className="text-5xl font-bokor mb-6">SIR3N</h1>
      <p className="text-xl max-w-xl">Justice for Women. Expose. Empower. Elevate.</p>
    </div>
  );
};

export default Home;