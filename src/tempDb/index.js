// function to extract out available filter values based on role, salary, location, company, experience
export let getDropdownVal = () => {
  let jobRole = ['FRONTEND', 'IOS', 'ANDROID', 'TECH LEAD', 'BACKEND']

  let jobSalary = [
    100, 26, 35, 15, 64, 3, 23, 61, 86, 25, 31, 48, 79, 10, 93, 13, 44, 76, 62,
    32, 9, 98, 6, 36, 55, 34, 60, 102, 19, 52, 16, 91, 57, 5, 46, 101, 33, 24,
    66, 21, 69, 18, 58, 14, 92, 49, 28, 17, 22, 72, 38, 77, 42, 70, 89, 74, 68,
    37, 50, 71, 45, 51, 12, 41, 40, 30, 90, 75, 43, 56, 8, 11, 47, 97, 85, 7,
    95, 83, 73, 63, 87, 81, 4, 59, 82, 99, 94, 29, 88, 84, 67, 80, 78, 39, 27,
    53, 65, 96, 54, 20
  ]
  let jobLocation = ['DELHI NCR', 'MUMBAI', 'REMOTE', 'CHENNAI', 'BANGALORE']
  let jobCompany = [
    'Dropbox',
    'LG',
    'Sony',
    'Adobe Systems',
    'HP',
    'eBay',
    'Tencent',
    'Apple',
    'Asus',
    'Intel Corporation',
    'Rakuten',
    'Samsung',
    'Dell Technologies',
    'Cisco',
    'Oracle',
    'Baidu',
    'Amazon',
    'Olympus',
    'Alibaba',
    'GoPro',
    'Twitter',
    'ZTE',
    'Netflix',
    'MasterCard',
    'Facebook',
    'IBM',
    'Intel',
    'Google',
    'Huawei',
    'Adobe',
    'Pandora',
    'Nikon',
    'Lyft',
    'Spotify',
    'PayPal',
    'Visa',
    'Adobe Inc.',
    'Sharp',
    'Qualcomm',
    'Yahoo',
    'Panasonic',
    'Xiaomi',
    'Microsoft',
    'Tesla',
    'Epson',
    'Airbnb',
    'Canon',
    'Vimeo',
    'Uber',
    'LinkedIn'
  ]
  let jobExp = [3, 2, 5, 1, 8, 7, 6, 10, 9, 4]
  return {
    jobRole,
    jobSalary,
    jobLocation,
    jobCompany,
    jobExp
  }
}
