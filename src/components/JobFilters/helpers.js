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
      jobData = jobData.filter((job) => {
        if (job.jobRole && job.jobRole === str) return job
      })
    })
  }
  if (expr) {
    jobData = jobData.filter((job) => {
      if (job.minExp && +expr >= job?.minExp) return job
    })
  }
  if (location?.length !== 0) {
    location?.forEach((entry) => {
      let str = entry.toLowerCase()
      jobData = jobData.filter((job) => {
        if (job?.location && job?.location === str) return job
      })
    })
  }
  if (company?.length !== 0) {
    company?.forEach((entry) => {
      jobData = jobData.filter((job) => {
        if (job?.companyName && job?.companyName === entry) return job
      })
    })
  }
  if (salary) {
    let num = salary.split('L')
    let inLacs = +num?.[0]
    //considering filter salary in lacs
    jobData = jobData.filter((job) => {
      //considering job salary in thousands of dollars
      if (!job?.maxJdSalary) return null
      let jobSalary = Math.floor((job?.maxJdSalary * 83.38 * 1000) / 100000)
      console.log('salary->', job?.companyName, jobSalary, inLacs)
      if (job?.maxJdSalary && jobSalary >= inLacs) return job
    })
  }

  return jobData
}
