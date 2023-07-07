import React from 'react'
import { Alert } from 'react-bootstrap'

const Notification = ({ info }) => {
  if (!info.message) {
    return
  }

  const margin = {
    marginTop : '3%'
  }

  if (info.type === 'error') {
    return (
      <div style={margin}>
        <Alert variant="danger">
          {info.message}
        </Alert>
      </div>
    )
  }
  return (
    <div style={margin}>
      <Alert variant="success">
        {info.message}
      </Alert>
    </div>
  )
}

export default Notification