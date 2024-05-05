import axios from 'axios'

export const getJobListApi = async () => {
  try {
    let data = JSON.stringify({
      limit: 10,
      offset: 0
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
    console.log('res->', res?.data)

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
