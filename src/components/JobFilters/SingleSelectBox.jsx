import { useState } from 'react'
import { MenuItem, FormControl, Select } from '@mui/material'
import { useDispatch } from 'react-redux'

const SingleSelectBox = ({ dropDownList, label, style, reduxAction }) => {
  const [optionVal, setOptionVal] = useState('')
  const dispatch = useDispatch()
  const handleChange = (event) => {
    let {
      target: { value }
    } = event
    setOptionVal(value)
    dispatch({ type: reduxAction, payload: value })
  }
  return (
    <div>
      <FormControl fullWidth>
        <div style={{ fontWeight: 'bold', fontSize: '12px' }}>
          {optionVal ? label : <span style={{ color: 'white' }}>Text</span>}
        </div>
        <Select
          //   label={label}
          id='demo-simple-select'
          inputProps={{ 'aria-label': 'Without label' }}
          value={optionVal}
          displayEmpty
          onChange={handleChange}
          renderValue={(selected) => {
            if (!selected) {
              return (
                <span
                  style={{ color: 'grey', fontWeight: 400, fontSize: '12px' }}
                >
                  {label}
                </span>
              )
            }
            return selected
          }}
          size='small'
          style={style}
        >
          {dropDownList?.map((it) => {
            return <MenuItem value={it}>{it}</MenuItem>
          })}
        </Select>
      </FormControl>
    </div>
  )
}

export default SingleSelectBox
