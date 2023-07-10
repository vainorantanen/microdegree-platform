import React from 'react'
import Company from './Company'
import { Box, Container, Typography } from '@mui/material'

const CompaniesList = ({ users }) => {
  return (
    <Container sx={{ marginTop: '5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
    }}>
      <Typography
        variant="h2"
        sx={{
          fontSize: '2rem',
          '@media (max-width: 442px)': {
            fontSize: '1.4rem',
          },
        }}
      >
        Companies
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {users.map((u) => (
          <Box key={u.id} sx={{ marginBottom: '1rem' }}>
            <Company company={u} />
          </Box>
        ))}
      </Box>
    </Container>
  )
}

export default CompaniesList
