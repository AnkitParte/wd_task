import axios from 'axios'

//API function
let l = 10
export const getJobListApi = async (pageNum) => {
  try {
    let data = JSON.stringify({
      limit: l,
      offset: l * pageNum
    })

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://api.weekday.technology/adhoc/getSampleJdJSON',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    }

    let res = await axios.request(config)
    // console.log('res->', res?.data)

    return {
      status: 200,
      data: res?.data
    }
  } catch (error) {
    console.log('api error', error)
    return {
      status: 400
    }
  }
}
