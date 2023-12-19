import React from 'react';
import style from '../styles/Proto.module.scss';
import Google from '../assets/google.png';


const Proto = (): JSX.Element => {
  return (
    <div>
      <div className={style.jobContainer}>
        <div className={style.jobIcon}>
          <img src={Google}/>
        </div>
        <div className={style.jobText}>
          <p style={{ fontStyle: 'italic'}}>Senior Frontend Engineer, II</p>
          <p style={{ fontWeight: 'bolder' }}>GOOGLE</p>
        </div>
      </div>
    </div>
  );
};

export default Proto;
