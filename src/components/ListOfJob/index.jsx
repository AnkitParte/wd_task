import React, { useEffect } from 'react'
import { getJobListApi } from './api'

const ListOfJob = () => {
  const apiCall = async () => {
    let apiRes = await getJobListApi()
    console.log('apiRes', apiRes)
  }
  useEffect(() => {
    apiCall()
  }, [])
  return (
    <div>
      <div style={{ textAlign: 'center' }}>Job List</div>
      <div></div>
    </div>
  )
}

export default ListOfJob
