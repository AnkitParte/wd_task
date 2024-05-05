import React, { useEffect, useState } from 'react'
import { getJobListApi } from './api'

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
    <div>
      <div style={{ textAlign: 'center' }}>Job List</div>
      <div>
        {jobApiData?.jdList?.map((it) => {
          return <div>{it?.id}</div>
        })}
      </div>
    </div>
  )
}

export default ListOfJob
