import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import { MenuItem, FormControl, Select, Chip, Button, Box } from '@mui/material'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      // height: 1000,
      width: 250
    }
  }
}

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder'
]

function getStyles(name, option, theme) {
  return {
    fontWeight:
      option.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  }
}

export default function MultipleSelectBox({ dropDownList, label, style }) {
  const theme = useTheme()
  const [optionValue, setOptionValue] = useState([])

  const handleChange = (event) => {
    const {
      target: { value }
    } = event
    console.log('value->', value)
    setOptionValue(value)
  }

  // console.log('optionValue->', optionValue)
  return (
    <div>
      <FormControl
        // sx={{ m: 1, width: 300, border: '1px solid blue' }}
        size='small'
      >
        {/* {optionValue.length != 0 && ( */}
        <div style={{ fontWeight: 'bold', fontSize: '12px' }}>
          {optionValue.length != 0 ? (
            label
          ) : (
            <span style={{ color: 'white' }}>Text</span>
          )}
        </div>
        {/* )} */}
        <Select
          //   style={{ marginTop: '10px' }}
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
                      onDelete={(e) => {
                        console.log('e->', e)
                      }}
                      size='small'
                      style={{ borderRadius: '4px' }}
                    />
                    {/* <button
                      size='small'
                      style={{
                        border: '1px solid green',
                        padding: '4px',
                        borderRadius: '4px'
                      }}
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
