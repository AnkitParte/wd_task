import React from 'react'
import JobCard from '../JobCard'
import userJobListApi from './userJobListApi'

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
  const { jobApiData } = userJobListApi({ pageNum: 0 })
  return (
    <div style={{ marginTop: '20px' }}>
      {/* <div style={{ textAlign: 'center' }}>Job List</div> */}
      <div style={flexDivStyle}>
        {jobApiData?.jdList?.map((it) => {
          // return <div>{it?.id}</div>
          return <JobCard key={it?.jdUid} data={it} />
        })}
      </div>
    </div>
  )
}

export default ListOfJob
