import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from '../views/HomeView';
import DashboardView from '../views/DashboardView';
import FlashcardsView from '../views/FlashcardsView';

const AllRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/dashboard" element={<DashboardView />} />
      <Route path="/dashboard/flashcards/:id" element={<FlashcardsView />} />
    </Routes>
  </Router>
);

export default AllRoutes;
