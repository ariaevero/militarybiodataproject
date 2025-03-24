import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import MedBlog from './pages/MedBlog';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const [user, setUser] = useState({ role: localStorage.getItem('role') });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute role="doctor"><AdminPanel /></ProtectedRoute>} />
        <Route path="/blog" element={<ProtectedRoute><MedBlog /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
