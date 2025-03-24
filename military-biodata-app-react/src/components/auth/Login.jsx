import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../api';

const Login = () => {
  const [serviceNo, setServiceNo] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/auth/login', { serviceNo, password });
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch (error) {
      alert('❌ Login failed. Please check credentials.');
    }
  };

  return (
    <form onSubmit={handleLogin} className="auth-form">
      <h2>Login</h2>
      <input placeholder="Service Number" value={serviceNo} onChange={e => setServiceNo(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
