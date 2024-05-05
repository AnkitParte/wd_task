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
  console.log('--filter--', filter)
  console.log('--data--', data)
  let jobData = [...data]

  if (filter?.role?.length != 0) {
  }
  if (filter?.expr?.length != 0) {
  }
  if (filter?.location?.length != 0) {
  }
  if (filter?.company?.length != 0) {
  }
  if (filter?.salary?.length != 0) {
  }

  return jobData
}
