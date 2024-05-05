export const roleList = [
  'Frontend',
  'Backend',
  'Dev-ops',
  'HR',
  'Senior Developer'
]

export const compName = ['1-10', '11-20', '21-50', '51-100', 'Senior Developer']

export const yearOfExp = [1, 2, 3, 4, 5]

export const locationOfEmp = ['Remote', 'Hybrid', 'In-office']

export const minBase = ['5L', '10L', '15L', '20L', '30L', '40L', '50L']

export const filterData = (data, filter) => {
  // console.log('--filter--', filter)
  // console.log('--data--', data)
  let jobData = [...data]
  let { role, company, salary, location, expr } = filter

  if (role?.length !== 0) {
    role?.forEach((entry) => {
      let str = entry.toLowerCase()
      jobData = jobData.filter((job) => job?.jobRole === str)
    })
  }
  if (expr?.length !== 0) {
    expr?.forEach((entry) => {
      jobData = jobData.filter((job) => entry >= job?.minExp)
    })
  }
  if (location?.length !== 0) {
    location?.forEach((entry) => {
      let str = entry.toLowerCase()
      jobData = jobData.filter((job) => job?.location === str)
    })
  }
  if (company?.length !== 0) {
    company?.forEach((entry) => {
      jobData = jobData.filter((job) => job?.location === entry)
    })
  }
  if (salary?.length !== 0) {
    company?.forEach((entry) => {
      let num = entry.split('L')
      jobData = jobData.filter((job) => {
        let salary = job * 83.38
        if (+num >= salary) return job
      })
    })
  }

  return jobData
}
