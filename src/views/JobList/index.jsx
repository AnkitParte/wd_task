import React from 'react'
import styles from './joblist.module.css'
import Badge from '@mui/material/Badge'
import JobFilters from '../../components/JobFilters/JobFilters'

const JobList = () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <Badge badgeContent={4} color='primary'>
          <span style={{ padding: '5px' }} className={styles?.headerDiv}>
            Search Jobs
          </span>
        </Badge>
      </div>
      <JobFilters />
    </>
  )
}

export default JobList
