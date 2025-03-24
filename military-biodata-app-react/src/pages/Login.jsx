import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [serviceNo, setServiceNo] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const login = () => {
    api.post('/auth/login', { serviceNo, password })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('role', res.data.role);
        setUser({ role: res.data.role });
        nav('/dashboard');
      })
      .catch(err => alert('Login failed'));
  };

  return (
    <div className="auth-form">
      <h2>🔐 Login</h2>
      <input value={serviceNo} onChange={e => setServiceNo(e.target.value)} placeholder="Service Number" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
