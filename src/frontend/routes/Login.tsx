import React, { useState } from 'react';
import styles from '../styles/Login.module.scss'
import  Modal from '../components/Modal'
import { useNavigate } from 'react-router-dom'

const Login = (): JSX.Element => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, password }),
      });

      if (response.ok) {
        // User authentication successful
        console.log('User authenticated');
        navigate('/')
      } else {
        // User authentication failed
        console.log('Authentication failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <Modal>
      <div className={styles.logoContainer}>
        <h1>💼</h1>
        <h1>JobTracker</h1>
      </div>
      <div className={styles.inputFieldContainer}>
        <input type='text' placeholder='Enter Your Username' value={userName} onChange={(e) => setUsername(e.target.value)} />
        <input type='password' placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div className={styles.loginButtonsContainer}>
        <a href="javascript:void(0)" onClick={()=> navigate('/register')}>Sign Up</a>
        <button className={styles.loginButton} onClick={handleLogin}>Submit</button>
      </div>
    </Modal>
  );
};

export default Login;
