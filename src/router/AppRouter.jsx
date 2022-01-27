import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from '../containers/Landing';
import NotFound from '../containers/NotFound';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
