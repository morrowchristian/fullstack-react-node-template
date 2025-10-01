import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://backend:5000/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error('Fetch error:', err));
  }, []);

  return (
    <div>
      <h1>Full-Stack Template</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;