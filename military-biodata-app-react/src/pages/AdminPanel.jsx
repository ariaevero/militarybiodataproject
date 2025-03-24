import React, { useState } from 'react';
import SubmitBP from '../components/SubmitBP';
import AnnualCheckup from '../components/AnnualCheckup';
import DHMLFormView from '../components/DHMLFormView';
import FileDownloads from '../components/FileDownloads';
import '../styles/AdminPanel.css';

const AdminPanel = () => {
  const [tab, setTab] = useState('bp');

  return (
    <div className="admin-panel">
      <h2>🩺 Admin Panel</h2>
      <div className="tab-buttons">
        <button onClick={() => setTab('bp')}>📉 Submit BP</button>
        <button onClick={() => setTab('annual')}>📆 Submit Checkup</button>
        <button onClick={() => setTab('dhml')}>📄 DHML Forms</button>
        <button onClick={() => setTab('downloads')}>📁 Downloads</button>
      </div>

      <div className="tab-content">
        {tab === 'bp' && <SubmitBP />}
        {tab === 'annual' && <AnnualCheckup />}
        {tab === 'dhml' && <DHMLFormView />}
        {tab === 'downloads' && <FileDownloads />}
      </div>
    </div>
  );
};

export default AdminPanel;
