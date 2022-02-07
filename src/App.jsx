import LandingPage from '@containers/LandingPage';
import NotFoundPage from '@containers/NotFoundPage';
import SuccessPage from '@containers/SuccessPage';
import '@styles/main.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
