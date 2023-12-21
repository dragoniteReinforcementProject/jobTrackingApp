import React from 'react';
import styles from '../styles/CenteredWrapper.module.scss';
import { WrapperProps } from '../types'

const CenteredWrapper = ({children}: WrapperProps): JSX.Element => {
  return (
    <div className={styles.centeredWrapper}>
      {children}
    </div>
  )
};

export default CenteredWrapper;