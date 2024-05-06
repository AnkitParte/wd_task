import React, { useState } from 'react'
import styles from './joblist.module.css'
import Badge from '@mui/material/Badge'
import JobFilters from '../../components/JobFilters/JobFilters'
import ListOfJob from '../../components/ListOfJob'

const JobList = () => {
  const [totalJobCount, setTotalJobCount] = useState(0)
  return (
    <>
      <div className={styles?.mainHeading}>Weekday Assignment</div>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Badge badgeContent={totalJobCount || '0'} color='primary'>
          <span style={{ padding: '5px' }} className={styles?.headerDiv}>
            Search Jobs
          </span>
        </Badge>
      </div>
      {/* Job Filters component */}
      <JobFilters />
      {/* List of Jobs component */}
      <ListOfJob setTotalJobCount={setTotalJobCount} />
    </>
  )
}

export default JobList
