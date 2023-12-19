import React from 'react';
import styles from '../styles/Home.module.scss';

import { JobColumn } from '../components';

const Home = (): JSX.Element => {
  const columnHeaders = ['Wishlist', 'Applied', 'Phone', 'Interview', 'Offer', 'Rejected']

  const columns = columnHeaders.map((label, i) => {
    return (
      <JobColumn
        key={`jobColumn_${i}x${i + 1}`}
        columnStart={i}
        columnEnd={i + 1}
        header={label}
      />
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
        {columns}
      </div>
    </div>
  )
}

export default Home;
