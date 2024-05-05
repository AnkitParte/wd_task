import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
// import OutlinedInput from '@mui/material/OutlinedInput'
// import InputLabel from '@mui/material/InputLabel'
// import MenuItem from '@mui/material/MenuItem'
// import FormControl from '@mui/material/FormControl'
// import Select from '@mui/material/Select'
// import Chip from '@mui/material/Chip'
import { MenuItem, FormControl, Select, Chip, Button } from '@mui/material'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250
//     }
//   }
// }

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

export default function MultipleSelectChip({ dropDownList, label }) {
  const theme = useTheme()
  const [optionValue, setOptionValue] = React.useState([])

  const handleChange = (event) => {
    const {
      target: { value }
    } = event
    setOptionValue(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    )
  }

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }} size='small'>
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
          //   labelId='demo-multiple-chip-label'
          //   id='demo-multiple-chip'
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
