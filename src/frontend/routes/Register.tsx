import React, { useState, ChangeEventHandler } from 'react';
import styles from '../styles/Register.module.scss'
import  Modal from '../components/Modal'
import { useNavigate } from 'react-router-dom'

const Register = ():JSX.Element => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userRealName, setRealName] = useState('');
  
  const navigate = useNavigate();

  const updateUsername: ChangeEventHandler = (e) => {
    const el = e.target as HTMLInputElement;
    setUsername(el.value)
  }
  const updatePassword: ChangeEventHandler = (e) => {
    const el = e.target as HTMLInputElement;
    setPassword(el.value)
  }
  const updateRealName: ChangeEventHandler = (e) => {
    const el = e.target as HTMLInputElement;
    setRealName(el.value)
  }

  const onSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, password, userRealName}),
      });
      console.log(response)
      if (response.ok) {
        // User authentication successful
        console.log('accountCreated');
        navigate('/');
      } else {
        // User authentication failed
        console.log('Authentication failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  }

  return(
    <Modal>
      <h1>📝</h1>
      <h1>Register</h1>
      <div className={styles.inputPair}>
        <label htmlFor="username">Username: </label>
        <input
          id="username"
          name="username"
          value={userName}
          onChange={updateUsername}
        ></input>
      </div>
      <div className={styles.inputPair}>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          name="name"
          value={userRealName}
          onChange={updateRealName}
        ></input>
      </div>
      <div className={styles.inputPair} style={{paddingBottom:'10px'}}>
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={updatePassword}
        ></input>
      </div>
      <div className={styles.inputPair}>
        <a href="javascript:void(0)" onClick={()=>navigate('/login')}>Login</a>
        <input type="button" value="Submit"onClick={onSubmit}/>
      </div>
    </Modal>
  );
}

export default Register;