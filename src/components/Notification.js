import React from 'react'
import { Alert, Box } from '@mui/material'

const Notification = ({ info }) => {
  if (!info.message) {
    return null
  }

  const margin = {
    marginTop: '3%',
  }

  if (info.type === 'error') {
    return (
      <Box sx={margin}>
        <Alert severity="error">{info.message}</Alert>
      </Box>
    )
  }

  return (
    <Box sx={margin}>
      <Alert severity="success">{info.message}</Alert>
    </Box>
  )
}

export default Notification
