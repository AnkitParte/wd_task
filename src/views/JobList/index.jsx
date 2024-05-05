import React, { useState } from 'react'
import styles from './joblist.module.css'
import Badge from '@mui/material/Badge'
import JobFilters from '../../components/JobFilters/JobFilters'
import ListOfJob from '../../components/ListOfJob'

const JobList = () => {
  const [totalJobCount, setTotalJobCount] = useState(0)
  return (
    <>
      <div
        style={{
          textAlign: 'center',
          marginBottom: '20px',
          fontWeight: 600,
          fontSize: '20px'
        }}
      >
        Weekday Assignment
      </div>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Badge badgeContent={totalJobCount} color='primary'>
          <span style={{ padding: '5px' }} className={styles?.headerDiv}>
            Search Jobs
          </span>
        </Badge>
      </div>
      <JobFilters />
      <ListOfJob setTotalJobCount={setTotalJobCount} />
    </>
  )
}

export default JobList
