import * as React from 'react'
import { Box, Modal, Typography } from '@mui/material'
import jobCardStyles from './jobCard.module.css'

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'white',
  boxShadow: 24,
  p: 2,
  borderRadius: '6px'
}

// Modal to handle show more data functionality
export default function JobInfoModal({ isOpen, onClose, data }) {
  return (
    <div>
      <Modal open={isOpen} onClose={onClose}>
        <Box sx={style}>
          <div
            style={{
              textAlign: 'center',
              fontSize: '16px',
              fontWeight: 510,
              marginBottom: '20px'
            }}
          >
            Job Description
          </div>
          <div className={jobCardStyles.aboutDiv} style={{ marginTop: '10px' }}>
            About Company:
          </div>
          <div>{data?.jobDetailsFromCompany}</div>
          <div className={jobCardStyles.aboutDiv} style={{ marginTop: '10px' }}>
            About Role:
          </div>
          <div className={jobCardStyles?.roleName}>{data?.jobRole}</div>
        </Box>
      </Modal>
    </div>
  )
}
