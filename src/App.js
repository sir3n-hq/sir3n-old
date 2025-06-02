import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoadScript } from '@react-google-maps/api';
import SubmissionForm from './components/SubmissionForm';

const GOOGLE_API_KEY = 'AIzaSyC_xCYVOeiOQcf44wR2V0supxqRsQekfNQ';

function App() {
  return (
    <LoadScript googleMapsApiKey={GOOGLE_API_KEY} libraries={['places']}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SubmissionForm />} />
        </Routes>
      </BrowserRouter>
    </LoadScript>
  );
}

export default App;
