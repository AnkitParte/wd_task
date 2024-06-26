import { useEffect, useState } from 'react'
import { getJobListApi } from './api'
import { filterData } from '../JobFilters/helpers'

//hooks to handle api call logic and pagination based on infinite scroll
const userJobListApi = (props) => {
  const { pageNum, redux, setTotalJobCount } = props
  //   console.log('pageNum', pageNum)
  const [jobApiData, setJobApiData] = useState({ jdList: [], totalCount: 0 })
  const [hasMore, setHasMore] = useState(false)
  const [loading, setLoading] = useState(false)

  // API call handler
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

  // on filter change handling available data
  const onFilterChange = () => {
    let dataAfterFilter = filterData([...jobApiData.jdList], redux)
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

  // will when page number change
  useEffect(() => {
    apiCall()
  }, [pageNum])

  // will run when a filter change
  useEffect(() => {
    onFilterChange()
  }, [redux])
  return { jobApiData, loading, hasMore }
}

export default userJobListApi
