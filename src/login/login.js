import React, { useState } from 'react';
import './login.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform authentication logic here using the entered username
    // You can send an API request to your backend for authentication

    // Clear the username input field after submission
    setUsername('');
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="username-input">
        Username:
        <input
          id="username-input"
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
