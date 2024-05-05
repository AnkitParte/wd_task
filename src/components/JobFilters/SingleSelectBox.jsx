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
  const handleClearAll = (event) => {
    event.stopPropagation() // Stop propagation to prevent the dropdown from opening
    setOptionVal('')
    dispatch({ type: reduxAction, payload: '' })
  }
  return (
    <div>
      <FormControl fullWidth>
        <div style={{ fontWeight: 'bold', fontSize: '12px' }}>
          {optionVal ? label : <span style={{ color: 'white' }}>Text</span>}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
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
          {optionVal && (
            <button
              style={{
                border: '1px solid lightgrey',
                borderRadius: '4px',
                background: 'transparent',
                fontSize: '16px',
                padding: '10px'
              }}
              onClick={handleClearAll}
            >
              x
            </button>
          )}
        </div>
      </FormControl>
    </div>
  )
}

export default SingleSelectBox
