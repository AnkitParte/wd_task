import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import { MenuItem, FormControl, Select, Chip, Box } from '@mui/material'
import { useDispatch } from 'react-redux'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

function getStyles(name, option, theme) {
  return {
    fontWeight:
      option.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  }
}

export default function MultipleSelectBox({
  dropDownList,
  label,
  style,
  reduxAction
}) {
  const theme = useTheme()
  const [optionValue, setOptionValue] = useState([])
  const dispatch = useDispatch()
  // const [isHovered, setIsHovered] = useState(false)

  // const handleMouseOver = () => {
  //   setIsHovered(true)
  // }

  // const handleMouseOut = () => {
  //   setIsHovered(false)
  // }
  // const btnStyle = {
  //   backgroundColor: isHovered ? 'coral' : '',
  //   color: isHovered ? 'white' : 'black',
  //   padding: '10px',
  //   border: 'none',
  //   padding: '4px 6px',
  //   borderRadius: '4px'
  // }

  const handleChange = (event) => {
    const {
      target: { value }
    } = event
    console.log('value->', value)
    setOptionValue(value)
    dispatch({ type: reduxAction, payload: value })
  }
  // const handleDelete = (e, value) => {
  //   e.preventDefault()
  //   console.log('event', value)
  //   let newVal = optionValue?.filter((it) => it != value)
  //   setOptionValue(newVal)
  //   dispatch({ type: reduxAction, payload: newVal })
  // }

  // console.log('optionValue->', optionValue)
  return (
    <div>
      <FormControl size='small'>
        <div style={{ fontWeight: 'bold', fontSize: '12px' }}>
          {optionValue.length != 0 ? (
            label
          ) : (
            <span style={{ color: 'white' }}>Text</span>
          )}
        </div>
        <Select
          labelId='demo-multiple-chip-label'
          id='demo-multiple-chip'
          multiple
          displayEmpty
          value={optionValue}
          onChange={handleChange}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return (
                <span
                  style={{ color: 'grey', fontWeight: 400, fontSize: '12px' }}
                >
                  {label}
                </span>
              )
            }
            return (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <span
                  //   style={{ border: '1px solid red' }}
                  >
                    <Chip
                      key={value}
                      label={value}
                      // onDelete={(e) => handleDelete(e, value)}
                      onDelete={() => {}}
                      size='small'
                      style={{ borderRadius: '4px' }}
                    />
                    {/* <button
                      style={btnStyle}
                      onClick={() => handleDelete(value)}
                      onMouseOver={handleMouseOver}
                      onMouseLeave={handleMouseOut}
                    >
                      x
                    </button> */}
                  </span>
                ))}
              </Box>
            )
          }}
          inputProps={{ 'aria-label': 'Without label' }}
          style={style}
          MenuProps={MenuProps}
        >
          {dropDownList.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, optionValue, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
