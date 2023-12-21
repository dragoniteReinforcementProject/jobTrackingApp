import React from 'react';
import { WrapperProps } from '../types';

import styles from '../styles/Modal.module.scss'

const Modal = ({ children }: WrapperProps): JSX.Element => {
  return(
    <div className={styles.container}>
      {children}
    </div>
  );
}

export default Modal;