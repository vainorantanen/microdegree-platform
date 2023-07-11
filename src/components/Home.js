import { Box } from '@mui/material'
import React from 'react'
import CoursesList from './CoursesList'

const Home = ({ courses }) => {
  return (
    <Box sx={{ marginTop: '3rem' }}>
      <CoursesList courses={courses}/>
    </Box>
  )
}

export default Home