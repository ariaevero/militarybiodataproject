import React, { useState } from 'react';
import '../styles/MedBlog.css';

const MedBlog = () => {
  const [comments, setComments] = useState([]);
  const [entry, setEntry] = useState('');

  const submitComment = () => {
    if (entry.trim()) {
      setComments(prev => [...prev, { text: entry, date: new Date() }]);
      setEntry('');
    }
  };

  return (
    <div className="med-blog">
      <div className="banner">
        📝 Write for Us! Contribute health articles to empower fellow personnel.
      </div>
      <h2>📰 Medical Education Hub</h2>
      <article>
        <h3>Staying Fit During Deployment</h3>
        <p>Health is mission-critical. Here’s how to maintain fitness during long deployments...</p>
      </article>

      <section className="comments">
        <h4>💬 Comments</h4>
        <textarea value={entry} onChange={(e) => setEntry(e.target.value)} placeholder="Add your comment..."/>
        <button onClick={submitComment}>Post</button>
        <ul>
          {comments.map((c, i) => (
            <li key={i}>
              <strong>{c.date.toLocaleDateString()}:</strong> {c.text}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default MedBlog;
