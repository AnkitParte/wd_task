import React from 'react'
import MultipleSelectChip from './temp'
import {
  numOfEmp,
  roleList,
  yearOfExp,
  locationOfEmp,
  minBase
} from './helpers'

const JobFilters = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <MultipleSelectChip dropDownList={roleList} label={'Roles'} />
      <MultipleSelectChip dropDownList={numOfEmp} label={'No of Employees'} />
      <MultipleSelectChip dropDownList={yearOfExp} label={'Experience'} />
      <MultipleSelectChip dropDownList={locationOfEmp} label={'Location'} />
      <MultipleSelectChip dropDownList={minBase} label={'Min Base Pay'} />
    </div>
  )
}

export default JobFilters
