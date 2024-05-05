import { Chip, Button } from '@mui/material'
import jobCardStyles from './jobCard.module.css'

// let descStyle = {
//   width: '250px',
//   maxHeight: '120px',
//   overflow: 'hidden',
//   textOverflow: 'ellipsis',
//   lineHeight: '1.2rem',
//   WebkitLineClamp: 6,
//   display: '-webkit-box',
//   WebkitBoxOrient: 'vertical'
// }
const JobCard = ({ data }) => {
  return (
    <div className={jobCardStyles.jobCard}>
      <div>
        <Chip
          icon={<>⏳</>}
          size='small'
          variant='outlined'
          label={`Posted 3 days ago`}
          style={{ padding: '4px', fontSize: '8px' }}
        />
      </div>
      <div className={jobCardStyles.nameLogoDiv}>
        <div>
          <img src={data?.logoUrl} style={{ height: '30px', width: '30px' }} />
        </div>
        <div>
          <div>{data?.companyName}</div>
          <div>{data?.jobRole}</div>
          <div>{data?.location}</div>
        </div>
      </div>
      <div className={jobCardStyles.salaryDiv}>
        Estimated Salary:{' '}
        {data?.minJdSalary
          ? `₹ ${Math.floor((data?.minJdSalary * 83.38 * 1000) / 100000)}L`
          : 'U/A'}
      </div>
      <div className={jobCardStyles.aboutDiv}>About Company:</div>
      <div
        // style={descStyle}
        className={jobCardStyles.descDiv}
      >
        {data?.jobDetailsFromCompany}
      </div>
      <div className={jobCardStyles.minExpDiv}>Minimum Experience</div>
      <div className={jobCardStyles.minExpVal}>
        {data?.minExp ? `${data?.minExp} years` : 'U/A'}
      </div>
      <div>
        <button
          // style={{ color: 'white', background: 'black' }}
          className={jobCardStyles.easyApplyBtn}
          variant='contained'
          fullWidth
        >
          ⚡️ Easy Apply
        </button>
      </div>
    </div>
  )
}

export default JobCard
