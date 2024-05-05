import React, { useEffect, useState } from 'react'
import JobCard from '../JobCard'
import userJobListApi from './userJobListApi'
import { useSelector } from 'react-redux'

let flexDivStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '30px',
  textAlign: 'left',
  padding: '0 5rem',
  // border: '1px solid green',
  width: '90%',
  margin: 'auto'
}
const ListOfJob = () => {
  const [page, setPage] = useState(0)
  const redux = useSelector((store) => store)
  console.log('redux->', redux)

  const { jobApiData, loading, hasMore } = userJobListApi({ pageNum: page })

  useEffect(() => {
    let onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        window.document.body.offsetHeight - 20
      ) {
        if (!hasMore) {
          setPage((p) => p + 1)
          // console.log('Page Up')
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
      {/* <div style={{ textAlign: 'center' }}>Job List</div> */}
      <div style={flexDivStyle}>
        {jobApiData?.jdList?.map((it, idx) => {
          return <JobCard key={idx} data={it} />
        })}
      </div>
    </div>
  )
}

export default ListOfJob
