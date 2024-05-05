import { Chip, Button } from '@mui/material'
import jobCardStyles from './jobCard.module.css'
import { useState } from 'react'
import JobInfoModal from './JobInfoModal'

const JobCard = ({ data }) => {
  const [jdModal, setJdModal] = useState(false)
  const [jdModalData, setJdModalData] = useState({})
  const handleJdModal = () => {
    setJdModal((p) => !p)
  }
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
      <div className={jobCardStyles.descDiv}>{data?.jobDetailsFromCompany}</div>
      <div
        className={jobCardStyles.showMoreDiv}
        onClick={() => {
          setJdModalData(data)
          handleJdModal()
        }}
      >
        Show More
      </div>
      <div className={jobCardStyles.minExpDiv}>Minimum Experience</div>
      <div className={jobCardStyles.minExpVal}>
        {data?.minExp ? `${data?.minExp} years` : 'U/A'}
      </div>
      <div>
        <button
          className={jobCardStyles.easyApplyBtn}
          variant='contained'
          fullWidth
        >
          ⚡️ Easy Apply
        </button>
      </div>
      {jdModal && (
        <JobInfoModal
          isOpen={jdModal}
          onClose={handleJdModal}
          data={jdModalData}
        />
      )}
    </div>
  )
}

export default JobCard
