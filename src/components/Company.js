import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

const Company = ({ company }) => {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '1rem',
        }}
      >
        <Box
          sx={{
            marginRight: '1rem',
          }}
        >
          <img
            src={`${company.imageurl}`}
            alt='Company logo'
            style={{
              border: '1px solid black',
              borderRadius: '10%',
              height: '5rem',
              width: '5rem',
            }}
          />
        </Box>
        <Box>
          <Typography variant="h6" component="div">
            <Link to={`/companies/${company.id}`}>{company.name}</Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}

export default Company
