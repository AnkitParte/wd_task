import React, { useRef, useState } from 'react'
import { useTheme } from '@mui/material/styles'
import { MenuItem, FormControl, Select, Chip, Box, Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { RxCross2 } from 'react-icons/rx'

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

  const handleChange = (event) => {
    const {
      target: { value }
    } = event
    // console.log('value->', value)
    setOptionValue(value)
    dispatch({ type: reduxAction, payload: value })
  }
  const handleClearAll = () => {
    setOptionValue([])
    dispatch({ type: reduxAction, payload: [] })
  }

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
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Select
            // labelId='demo-multiple-chip-label'
            // id='demo-multiple-chip'
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
                <div style={{ display: 'flex' }}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <span>
                        <Chip
                          key={value}
                          label={value}
                          onDelete={() => {}}
                          size='small'
                          style={{ borderRadius: '4px' }}
                        />
                      </span>
                    ))}
                  </Box>
                </div>
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
          {optionValue.length > 0 && (
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
              <RxCross2 style={{ marginTop: '4px' }} />
            </button>
          )}
        </div>
      </FormControl>
    </div>
  )
}
