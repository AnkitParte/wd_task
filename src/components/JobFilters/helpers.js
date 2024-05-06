import { checkSalaryValue } from '../JobCard/helpers'

export const minBase = [
  '5L',
  '10L',
  '15L',
  '20L',
  '30L',
  '40L',
  '50L',
  '60L',
  '70L',
  '80L',
  '90L'
]

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
      let check = checkSalaryValue(job?.minJdSalary, job?.maxJdSalary, inLacs)
      if (check) return job
    })
  }

  return jobData
}
