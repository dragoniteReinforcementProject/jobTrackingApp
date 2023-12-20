import React from 'react';
import style from '../styles/JobColumn.module.scss';
import { JobColumnProps } from '../types';


const JobColumn = ({ columnStart, columnEnd, header }: JobColumnProps): JSX.Element => {
  const addedStyle = {
    gridColumn: `${columnStart}/${columnEnd}`
  };

  return (
    <div className={style.colContainer} style={addedStyle}>
      <div className={style.colHeader}>
        <h2>{header}</h2>
      </div>
      <div className={style.jobTray}>
        Jobs would go here...
      </div>
    </div>
  )
}

export default JobColumn
