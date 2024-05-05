import { useEffect, useState } from 'react'
import { getJobListApi } from './api'

const userJobListApi = (props) => {
  const { pageNum } = props
  //   console.log('pageNum', pageNum)
  const [jobApiData, setJobApiData] = useState({ jdList: [], totalCount: 0 })
  const [hasMore, setHasMore] = useState(false)
  const [loading, setLoading] = useState(false)

  const apiCall = async () => {
    setLoading(true)
    let apiRes = await getJobListApi(pageNum)
    console.table(apiRes?.data?.jdList)
    if (apiRes?.status == 200) {
      let jdList = apiRes?.data?.jdList
      setJobApiData((prev) => {
        return { ...prev, jdList: [...prev?.jdList, ...jdList] }
      })
      if (apiRes?.data?.jdList <= 0) setHasMore(true) //to check if api has any data left
      setHasMore(false)
    }
    setLoading(false)
  }
  useEffect(() => {
    apiCall()
  }, [pageNum])
  return { jobApiData, loading, hasMore }
}

export default userJobListApi
