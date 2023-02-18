import React, { useState } from 'react';
import './login.css';
import logo from './logo.svg';
import Success from './Success';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'testuser' && password === 'testpassword') {
      setLoggedIn(true);
    } else {
      setErrorMessage('Incorrect username or password.');
    }
  };

  if (loggedIn) {
    return <Success />;
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="Applauz logo" className="logo" />
        <h2>Log In to My Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Log In</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
}

export default App;
