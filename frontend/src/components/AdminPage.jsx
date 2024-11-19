import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

 
  const correctPassword = "admin123"; 

  const handlePasswordSubmit = () => {
    if (password === correctPassword) {
      setError('');
      alert('Access Granted');
      navigate('/new-page');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="admin-container" style={{ textAlign: 'center', padding: '50px' }}>
      <h2>Administrator Login</h2>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
        style={{ padding: '10px', fontSize: '16px', marginBottom: '20px' }}
      />
      <br />
      <button onClick={handlePasswordSubmit} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Submit
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default AdminPage;
