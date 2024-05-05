import { useEffect, useState } from 'react'
import { getJobListApi } from './api'

const userJobListApi = (props) => {
  const { pageNum } = props
  //   console.log('pageNum', pageNum)
  const [jobApiData, setJobApiData] = useState({})
  const apiCall = async () => {
    let apiRes = await getJobListApi()
    // console.table(apiRes?.data?.jdList)
    if (apiRes?.status == 200) {
      setJobApiData(apiRes?.data)
    }
  }
  useEffect(() => {
    apiCall()
  }, [])
  return { jobApiData }
}

export default userJobListApi
