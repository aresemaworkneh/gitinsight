import React, { useState } from 'react';
import axios from 'axios';

function Metrics() {
  const [repoUrl, setRepoUrl] = useState('');
  const [commitData, setCommitData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
        const response = await axios.get(`http://localhost:3001/api/metrics?url=${encodeURIComponent(repoUrl)}`);
        const data = response.data;
      const commitMetrics = processData(data);
      setCommitData(commitMetrics);
    } catch (error) {
      console.error('Error fetching commit data:', error);
    }

    setLoading(false);
  };

  const processData = (data) => {
    // Process the data to determine metrics
    // Similar to the previous example

  };

  return (
    <div>
      <h2>Commit Metrics</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter GitHub Repository URL:
          <input type="text" value={repoUrl} onChange={(e) => setRepoUrl(e.target.value)} />
        </label>
        <button type="submit">Fetch Metrics</button>
      </form>

      {loading && <p>Loading...</p>}

      <ul>
        {commitData.map((item, index) => (
          <li key={index}>
            <strong>{item.author}</strong>: {item.commits} commits
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Metrics;
