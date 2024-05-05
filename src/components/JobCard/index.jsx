import { Chip, Button } from '@material-ui/core'
import React from 'react'

let cardStyle = {
  boxShadow:
    'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
  padding: '2rem',
  borderRadius: '6px'
}
const JobCard = ({ data, ref }) => {
  return (
    <div style={cardStyle} ref={ref}>
      <div>
        <Chip size='small' variant='outlined' label={`Posted 3 days ago`} />
      </div>
      <div>{data?.companyName}</div>
      <div>{data?.jobRole}</div>
      <div>{data?.location}</div>
      <div>
        Estimated Salary: {data?.minJdSalary ? `₹ ${data?.minJdSalary}` : 'U/A'}
      </div>
      <div>About Company:</div>
      <div
        style={{
          // whiteSpace: 'nowrap',
          // overflow: 'hidden',
          // textOverflow: 'ellipsis',
          width: '250px',
          maxHeight: '120px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          lineHeight: '1.2rem',
          WebkitLineClamp: 6,
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical'
        }}
      >
        {data?.jobDetailsFromCompany}
      </div>
      <div>Minimum Experience</div>
      <div>{data?.minExp || 'U/A'}</div>
      <div>
        <Button
          style={{ color: 'white', background: 'black' }}
          variant='contained'
          fullWidth
        >
          Easy Apply
        </Button>
      </div>
    </div>
  )
}

export default JobCard
