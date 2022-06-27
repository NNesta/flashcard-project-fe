import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from '../views/HomeView';
import LoginView from '../views/LoginView';
import RegisterView from '../views/RegisterView';
import DashboardView from '../views/DashboardView';

const AllRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/register" element={<RegisterView />} />
      <Route path="/dashboard" element={<DashboardView />} />
    </Routes>
  </Router>
);

export default AllRoutes;
