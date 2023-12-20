/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useState } from 'react';
import styles from '../styles/JobModal.module.scss'
import type { ChangeEventHandler } from 'react';
import { format } from 'date-fns';
import { Save, X } from 'lucide-react';

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

interface CompanyProps {
  [index: string]: string | Date | number
  jobTitle: string
  company: string
  dateAdded: Date
  link: string
  color: number
  notes: string
  location: string
  deadline: Date
  salary: string
  jobStatus: JobStatus
}

const Proto = ({
  jobTitle,
  company,
  dateAdded,
  link,
  color,
  deadline,
  location,
  salary,
  jobStatus,
  notes
}: CompanyProps
): JSX.Element => {
  // state
  const [_jobTitle, setJobTitle] = useState(jobTitle);
  const [_company, setCompany] = useState(company);
  const [_deadline, setDeadline] = useState(deadline);
  const [_location, setLocation] = useState(location);
  const [_salary, setSalary] = useState(salary);
  const [_status, setStatus] = useState(jobStatus);
  const [_jobLink, setJobLink] = useState(link);
  const [_notes, setNotes] = useState(notes);
  // handlers
  const updateJobTitle: ChangeEventHandler = e => {
    const el = e.target as HTMLInputElement;
    setJobTitle(el.value);
  }
  const updateCompany: ChangeEventHandler = e => {
    const el = e.target as HTMLInputElement;
    setCompany(el.value);
  }
  const updateDeadline: ChangeEventHandler = e => {
    const el = e.target as HTMLInputElement;
    setDeadline(new Date(el.value));
  }
  const updateLocation: ChangeEventHandler = e => {
    const el = e.target as HTMLInputElement;
    setLocation(el.value);
  }
  const updateSalary: ChangeEventHandler = e => {
    const el = e.target as HTMLInputElement;
    setSalary(el.value);
  }
  const updateStatus: ChangeEventHandler = e => {
    const el = e.target as HTMLInputElement;
    setStatus(el.value as JobStatus);
  }
  const updateJobLink: ChangeEventHandler = e => {
    const el = e.target as HTMLInputElement;
    setJobLink(el.value);
  }
  const updateNotes: ChangeEventHandler = e => {
    const el = e.target as HTMLInputElement;
    setNotes(el.value);
  }

  const onSave = (saveHandler) => {
    saveHandler({
      _jobTitle, _company, _deadline, _location, _salary, _status, _jobLink, _notes
    });
  }

  const onExit = (exitHandler) => {
    exitHandler();
  };

  return (
    <div>
      {/* <JobSlug {...obj} /> */}
      <div className={styles.jobModalOverlay}>
        <div className={styles.jobModalWrapper}>
          <main className={styles.jobModalContainer}>
            <div className={styles.jobModalHeader}>
              <div className={styles.text}>
                <h1>{_jobTitle}</h1>
                <h2>{_company ? _company.toUpperCase() : ''}</h2>
              </div>
              <div className={styles.icons}>
                <Save size='48'/>
                <X size='48' />
              </div>
            </div>
            <div className={styles.upperFields}>
              <div className={styles.jobInputPair}>
                <label htmlFor="job-title">Job Title</label>
                <input
                  type="text"
                  name="job-title"
                  onChange={updateJobTitle}
                  value={_jobTitle}
                ></input>
              </div>
              <div className={styles.jobInputPair}>
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  name="company"
                  onChange={updateCompany}
                  value={_company}
                ></input>
              </div>
              <div className={styles.jobInputPair}>
                <label htmlFor="deadline">Deadline</label>
                <input
                  type="date"
                  name="deadline"
                  onChange={updateDeadline}
                  value={format(_deadline, 'yyy-MM-dd')}
                ></input>
              </div>
              <div className={styles.jobInputPair}>
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  name="location"
                  onChange={updateLocation}
                  value={_location}
                ></input>
              </div>
              <div className={styles.jobInputPair}>
                <label htmlFor="salary">Salary</label>
                <input
                  type="text"
                  name="salary"
                  onChange={updateSalary}
                  value={_salary}
                ></input>
              </div>
              <div className={styles.jobInputPair}>
                <label htmlFor="status">Application Status</label>
                <select
                  name="status"
                  onChange={updateStatus}
                  value={_status}
                >
                  <option value="wishlist">{JobStatus.wishlist}</option>
                  <option value="applied">{JobStatus.applied}</option>
                  <option value="phone">{JobStatus.phone}</option>
                  <option value="interview">{JobStatus.interview}</option>
                  <option value="offer">{JobStatus.offer}</option>
                  <option value="rejected">{JobStatus.rejected}</option>
                </select>
              </div>
              <div
                style={{ gridColumn: '1/3', gridRow: '3/span 1', justifySelf: 'stretch' }}
                className={styles.jobInputPair}
                id="link"
              >
                <label htmlFor="link">Link</label>
                <input
                  type="text"
                  name="link"
                  onChange={updateJobLink}
                  value={_jobLink}
                ></input>
              </div>
              <div className={styles.jobInputNotes}>
                <label htmlFor="notes">Notes</label>
                <textarea
                  name="notes"
                  id="notes"
                  value={notes}
                  onChange={updateNotes}
                ></textarea>
              </div>
              <div style={{ gridRow: 8, fontStyle: 'italic', fontSize: '0.8em', padding: '10px'}}>
                {'Last updated: ' + format(dateAdded, 'MM-dd-yyyy')}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Proto;
