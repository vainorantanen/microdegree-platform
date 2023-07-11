import React from 'react'
import { Box, TextField } from '@mui/material'

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '2rem',
        marginBottom: '2rem',
        width: '100%',
        maxWidth: '30rem',
      }}
    >
      <TextField
        type='text'
        placeholder='Search'
        value={filter}
        onChange={handleFilterChange}
        fullWidth
        sx={{ marginBottom: '1rem', borderRadius: '2rem' }}
      />
    </Box>
  )
}

export default Filter