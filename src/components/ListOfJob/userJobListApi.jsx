import { useEffect, useState } from 'react'
import { getJobListApi } from './api'
import { filterData } from '../JobFilters/helpers'

const userJobListApi = (props) => {
  const { pageNum, redux, setTotalJobCount } = props
  //   console.log('pageNum', pageNum)
  const [jobApiData, setJobApiData] = useState({ jdList: [], totalCount: 0 })
  const [hasMore, setHasMore] = useState(false)
  const [loading, setLoading] = useState(false)

  const apiCall = async () => {
    setLoading(true)
    let apiRes = await getJobListApi(pageNum)
    // console.table(apiRes?.data?.jdList)
    if (apiRes?.status == 200) {
      let jdList = apiRes?.data?.jdList
      let dataAfterFilter = filterData([...jdList, ...jobApiData.jdList], redux)
      setJobApiData((prev) => {
        return {
          ...prev,
          jdList: dataAfterFilter,
          totalCount: dataAfterFilter?.length
        }
      })
      if (dataAfterFilter?.length == 0) setHasMore(true) //to check if api has any data left
      setHasMore(false)
      setTotalJobCount(dataAfterFilter?.length)
    }
    setLoading(false)
  }
  const onFilterChange = () => {
    let dataAfterFilter = filterData([...jobApiData.jdList], redux)
    setJobApiData((prev) => {
      return {
        ...prev,
        jdList: dataAfterFilter,
        totalCount: dataAfterFilter?.length
      }
    })
    setTotalJobCount(dataAfterFilter?.length)
  }
  useEffect(() => {
    apiCall()
  }, [pageNum, redux])
  // useEffect(() => {
  //   onFilterChange()
  // }, [redux])
  return { jobApiData, loading, hasMore }
}

export default userJobListApi
