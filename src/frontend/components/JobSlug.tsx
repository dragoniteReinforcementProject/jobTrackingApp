import React from 'react';
import type { MouseEventHandler } from 'react';
import style from '../styles/JobSlug.module.scss';
import Google from '../assets/google.png';
import { ExternalLink, Trash } from 'lucide-react';
import { formatDistanceToNowStrict } from 'date-fns';

interface CompanyProps {
  jobTitle: string
  company: string
  dateAdded: Date
  link: string
  color: number
}
/*
 const obj = {
    jobTitle: 'Backend Developer Extra cool mega props for my guy',
    company: 'Google',
    dateAdded: new Date(2023, 11, 1),
    link: 'https://www.google.com/',
    color: 4
  }
*/

const JobSlug = (
  { jobTitle, company, dateAdded, link, color }: CompanyProps
): JSX.Element => {
  const colors = [style.bgRed, style.bgOrange, style.bgYellow, style.bgGreen, style.bgTeal, style.bgBlue, style.bgPurple, style.bgPink];

  const externalLinkClick: MouseEventHandler = e => {
    e.stopPropagation();
    window.open(link, '_blank', 'noreferrer');
  }
  const trashJob: MouseEventHandler = e => {
    e.stopPropagation();
    console.log(`job at ${jobTitle} has been trashed!`)
  }
  const openModal: MouseEventHandler = e => {
    console.log(`open modal at ${jobTitle} has been opened`)
  }

  return (
    <div className={`${style.jobBorder} ${colors[color]}`}>
      <div className={style.jobContainer} onClick={openModal}>
        <div className={style.companyLogo}>
          <img src={Google}/>
        </div>
        <div className={style.jobText}>
          <p className={style.jobTitle}>{jobTitle}</p>
          <p className={style.jobCompany}>{company.toUpperCase()}</p>
        </div>
        <div className={style.iconBar}>
          <ExternalLink onClick={externalLinkClick}/>
          <Trash onClick={trashJob}/>
          <div className={style.timeString}>
            {formatDistanceToNowStrict(dateAdded)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSlug;
