import React from 'react';
import style from '../styles/JobColumn.module.scss';


type JobColumnProps = {
  columnStart: number,
  columnEnd: number,
  header: string,
};


const JobColumn = ({columnStart, columnEnd, header}: JobColumnProps) => {
  const addedStyle = {
    gridColumn: `${columnStart}/${columnEnd}`
  }

  return (
    <div className={style.colContainer} style={addedStyle}>
      <div className={style.colHeader}>
        <h2>{header}</h2>
      </div>
      <div className={style.jobTray}>

      </div>
    </div>
  )
};

export default JobColumn;
