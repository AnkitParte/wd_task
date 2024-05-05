import React from 'react'
import MultipleSelectBox from './MultiSelectBox'
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
        flexWrap: 'wrap',
        gap: '10px',
        padding: '0 12rem',
        // position: 'sticky',
        top: 0
      }}
    >
      <MultipleSelectBox
        dropDownList={roleList}
        label={'Roles'}
        style={{ minWidth: '170px' }}
      />
      <MultipleSelectBox
        dropDownList={numOfEmp}
        label={'No of Employees'}
        style={{ minWidth: '170px' }}
      />
      <MultipleSelectBox
        dropDownList={yearOfExp}
        label={'Experience'}
        style={{ minWidth: '70px' }}
      />
      <MultipleSelectBox
        dropDownList={locationOfEmp}
        label={'Location'}
        style={{ minWidth: '170px' }}
      />
      <MultipleSelectBox
        dropDownList={minBase}
        label={'Min Base Salary'}
        style={{ minWidth: '170px' }}
      />
    </div>
  )
}

export default JobFilters
