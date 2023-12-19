import React from 'react';
import styles from '../styles/Home.module.scss';

import JobColumn from '../components/JobColumn';

const Home = () => {

  const columns = ['Wishlist', 'Applied', 'Phone', 'Interview', 'Offer', 'Rejected']

  const headers = columns.map((label, i) => {
    const addedStyles = {
      gridColumn: `${i}/${i+1}`
    }
    

    return (
      <div 
        className={styles.jobsHeader}
        style={addedStyles}
      >
        <h2>{label}</h2>
      </div>
    );
  })

  return (
    <div>
      <h1 className={styles.test}>Home Route</h1>
      <div>
        <h2>Button bar</h2>
      </div>
      <div>
        <h2>V grid</h2>
      </div>
      <div className={styles.jobsGrid}>
        {headers}
      </div>
    </div>
  )
}

export default Home;