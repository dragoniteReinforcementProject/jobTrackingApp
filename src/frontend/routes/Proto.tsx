/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useState } from 'react';
import styles from '../styles/Proto.module.scss'
import type { ChangeEventHandler } from 'react';
import { format } from 'date-fns';
import { Save, X } from 'lucide-react';

import JobModal from '../components/JobModal';
import JobSlug from '../components/JobSlug';

const sentenceCase = (str: string): string => {
  let output = str.replaceAll(/[A-Z]/g, char => ' ' + char);
  output = output.slice(0, 1).toUpperCase() + output.slice(1);
  return output;
};
const tagCase = (str: string): string => {
  return str.replaceAll(/[A-Z]/g, char =>
    '-' + char.toLowerCase())
}

type _JobStatus = 'Wishlist' | 'Applied' | 'Phone' | 'Interview' | 'Offer' | 'Rejected';

enum JobStatus {
  wishlist = 'Wishlist',
  applied = 'Applied',
  phone = 'Phone',
  interview = 'Interview',
  offer = 'Offer',
  rejected = 'Rejected'
}

const obj: CompanyProps = {
  jobTitle: 'Backend Developer Extra cool mega props for my guy',
  company: 'Google',
  dateAdded: new Date(2023, 11, 1),
  link: 'https://www.google.com/',
  color: 2,
  deadline: new Date(2024, 0, 30),
  location: 'Cupertino, CA',
  salary: '$200,000',
  jobStatus: JobStatus.offer,
  notes: ''
}

const Proto = (): JSX.Element => {
 

  return (
   <JobModal {...obj} />
  );
};

export default Proto;
