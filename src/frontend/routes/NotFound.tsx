import React, { useState } from 'react';
import styles from '../styles/NotFound.module.scss'
import  Modal from '../components/Modal'


const NotFound = (): JSX.Element => {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',


  }
  return(
    <Modal>
      <div className={styles.container}>
        <h1>🤯</h1>
        <h1>Not Found</h1>
        <h3>Not sure what you are looking for,</h3>
        <h3>but it isn't here.</h3>
      </div>
    </Modal>
  );
}

export default NotFound;