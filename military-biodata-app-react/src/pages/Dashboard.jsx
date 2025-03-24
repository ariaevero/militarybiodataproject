import React, { useEffect, useState } from 'react';
import api from '../api';
import Chart from 'chart.js/auto';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [stats, setStats] = useState({ bp: [], annuals: [] });

  useEffect(() => {
    api.get('/dashboard/stats')
      .then(res => setStats(res.data))
      .catch(err => console.error('Failed to fetch stats:', err));
  }, []);

  useEffect(() => {
    if (stats.bp.length > 0) {
      const ctx = document.getElementById('bpChart').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: stats.bp.map(entry => new Date(entry.date).toLocaleDateString()),
          datasets: [
            {
              label: 'Systolic',
              data: stats.bp.map(entry => entry.systolic),
              borderColor: 'rgba(255, 99, 132, 0.7)',
              fill: false,
              tension: 0.4
            },
            {
              label: 'Diastolic',
              data: stats.bp.map(entry => entry.diastolic),
              borderColor: 'rgba(54, 162, 235, 0.7)',
              fill: false,
              tension: 0.4
            }
          ]
        },
        options: {
          responsive: true,
          plugins: { legend: { position: 'top' } },
          scales: { y: { beginAtZero: true } }
        }
      });
    }
  }, [stats.bp]);

  return (
    <div className="dashboard">
      <h2>📊 Health Monitoring Dashboard</h2>
      <canvas id="bpChart" height="100"></canvas>
      <section className="checkup-section">
        <h3>🩺 Annual Checkups</h3>
        <ul>
          {stats.annuals.map((a, i) => (
            <li key={i}>
              <strong>{new Date(a.testDate).toDateString()}:</strong> {a.resultSummary} — 
              <span className={a.confirmedByUser ? 'confirmed' : 'pending'}>
                {a.confirmedByUser ? '✔ Confirmed' : '⏳ Pending'}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
