import React, { useEffect, useState } from 'react'
import { getJobListApi } from './api'
import JobCard from '../JobCard'

let flexDivStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '4rem',
  textAlign: 'left',
  padding: '0 4rem',
  // border: '1px solid green',
  width: '80%',
  margin: 'auto'
}
const ListOfJob = () => {
  const [jobApiData, setJobApiData] = useState({})
  const apiCall = async () => {
    let apiRes = await getJobListApi()
    console.table(apiRes?.data?.jdList)
    if (apiRes?.status == 200) {
      setJobApiData(apiRes?.data)
    }
  }
  useEffect(() => {
    apiCall()
  }, [])
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
