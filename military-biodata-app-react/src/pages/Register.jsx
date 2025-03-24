import React, { useState } from 'react';
import api from '../api';

const Register = () => {
  const [form, setForm] = useState({ serviceNo: '', email: '', password: '', role: 'personnel' });

  const register = () => {
    api.post('/auth/register', form)
      .then(() => alert('Registered! Now login.'))
      .catch(err => alert('Registration failed'));
  };

  return (
    <div className="auth-form">
      <h2>📝 Register</h2>
      <input value={form.serviceNo} onChange={e => setForm({ ...form, serviceNo: e.target.value })} placeholder="Service Number" />
      <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Email" />
      <input type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} placeholder="Password" />
      <select value={form.role} onChange={e => setForm({ ...form, role: e.target.value })}>
        <option value="personnel">Personnel</option>
        <option value="nurse">Nurse</option>
        <option value="doctor">Doctor</option>
      </select>
      <button onClick={register}>Register</button>
    </div>
  );
};

export default Register;
