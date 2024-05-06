import React, { useEffect, useState } from 'react'
import JobCard from '../JobCard'
import userJobListApi from './userJobListApi'
import { useSelector } from 'react-redux'
import { Box, LinearProgress } from '@mui/material'
import listStyle from './listofjob.module.css'

const ListOfJob = ({ setTotalJobCount }) => {
  const [page, setPage] = useState(0)
  const redux = useSelector((store) => store)
  // console.log('redux->', redux)

  const { jobApiData, loading, hasMore } = userJobListApi({
    pageNum: page,
    redux,
    setTotalJobCount
  })

  useEffect(() => {
    let onScroll = () => {
      if (!loading) {
        if (
          window.innerHeight + window.scrollY >=
          window.document.body.offsetHeight - 50
        ) {
          if (!hasMore) {
            setPage((p) => p + 1)
          }
        }
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
  return (
    <div style={{ marginTop: '20px' }}>
      <div className={listStyle?.listDiv}>
        {jobApiData?.jdList?.map((it, idx) => {
          return <JobCard key={idx} data={it} />
        })}
      </div>
      {loading && (
        <Box sx={{ width: '90%', margin: 'auto', marginTop: '5rem' }}>
          <LinearProgress />
        </Box>
      )}
    </div>
  )
}

export default ListOfJob
