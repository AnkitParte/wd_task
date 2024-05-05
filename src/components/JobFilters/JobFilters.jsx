import React from 'react'
import MultipleSelectBox from './MultiSelectBox'
import { minBase } from './helpers'
import { getDropdownVal } from '../../tempDb'

const JobFilters = () => {
  let { jobRole, jobExp, jobLocation, jobCompany } = getDropdownVal()
  // console.log('FILTERS', jobRole, jobSalary, jobExp, jobLocation, jobCompany)
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          padding: '0 12rem'
          // position: 'absolute',
          // zIndex: 100
          // top: 0
        }}
      >
        <MultipleSelectBox
          dropDownList={jobRole}
          label={'Roles'}
          style={{ minWidth: '170px' }}
        />
        <MultipleSelectBox
          dropDownList={jobExp.sort((a, b) => a - b)}
          label={'Experience'}
          style={{ minWidth: '70px' }}
        />
        <MultipleSelectBox
          dropDownList={jobLocation}
          label={'Location'}
          style={{ minWidth: '170px' }}
        />
        <MultipleSelectBox
          dropDownList={minBase}
          label={'Min Base Salary'}
          style={{ minWidth: '170px' }}
        />
        <MultipleSelectBox
          dropDownList={jobCompany}
          label={'Company Name'}
          style={{ minWidth: '170px' }}
        />
      </div>
    </div>
  )
}

export default JobFilters
