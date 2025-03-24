import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import MedBlog from './pages/MedBlog';

const App = () => {
  const [user, setUser] = useState({ role: localStorage.getItem('role') });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {user.role === 'doctor' && <Route path="/admin" element={<AdminPanel />} />}
        <Route path="/blog" element={<MedBlog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
