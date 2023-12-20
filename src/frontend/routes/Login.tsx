import React, { useState } from 'react';

const Login = (): JSX.Element => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // User authentication successful
        console.log('User authenticated');
      } else {
        // User authentication failed
        console.log('Authentication failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="login-container">
      <div className='logo-container'>
        LOGO GOES HERE!
      </div>
      <div className='inputfield-container'>
        <input type='text' placeholder='Enter Your Username' value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type='text' placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div className='login-buttons-container'>
        <a href='#'>Sign Up</a>
        <button className='login-button' onClick={handleLogin}>Submit</button>
      </div>
    </div>
  );
};

export default Login;
