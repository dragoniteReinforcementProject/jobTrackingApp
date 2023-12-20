export interface JobColumnProps {
  columnStart: number
  columnEnd: number
  header: string
};

type _JobStatus = 'Wishlist' | 'Applied' | 'Phone' | 'Interview' | 'Offer' | 'Rejected';

export enum JobStatus {
  wishlist = 'Wishlist',
  applied = 'Applied',
  phone = 'Phone',
  interview = 'Interview',
  offer = 'Offer',
  rejected = 'Rejected'
}

export interface JobProps {
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