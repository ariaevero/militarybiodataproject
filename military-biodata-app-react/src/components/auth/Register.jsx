import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../api';

const Register = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/auth/register', form);
      alert('✅ Registered successfully! Please log in.');
      navigate('/');
    } catch (error) {
      alert('❌ Registration failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Register</h2>
      <input name="serviceNo" placeholder="Service Number" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <input name="rank" placeholder="Rank" onChange={handleChange} />
      <input name="unit" placeholder="Unit" onChange={handleChange} />
      <input name="location" placeholder="Location" onChange={handleChange} />
      <input name="command" placeholder="Command" onChange={handleChange} />
      <input name="dateJoined" type="date" placeholder="Date Joined" onChange={handleChange} />
      <button type="submit">Create Account</button>
    </form>
  );
};

export default Register;
