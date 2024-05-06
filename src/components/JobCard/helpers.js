export function formatSalary(minSalary, maxSalary) {
  if (minSalary !== null && maxSalary !== null) {
    let min = Math.floor((minSalary * 83.38 * 1000) / 100000)
    let max = Math.floor((maxSalary * 83.38 * 1000) / 100000)

    return `₹${min}L-${max}L`
  } else if (minSalary !== null) {
    let min = Math.floor((minSalary * 83.38 * 1000) / 100000)
    return `₹${min}L`
  } else {
    return 'U/A'
  }
}

export function checkSalaryValue(minSalary, maxSalary, value) {
  if (minSalary !== null && maxSalary !== null) {
    let min = Math.floor((minSalary * 83.38 * 1000) / 100000)
    let max = Math.floor((maxSalary * 83.38 * 1000) / 100000)

    if (value >= min && value <= max) return true
  } else if (minSalary !== null) {
    let min = Math.floor((minSalary * 83.38 * 1000) / 100000)
    if (value >= min) return true
  }
  return false
}
