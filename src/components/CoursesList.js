import React from 'react'
import Course from './Course'
import { useState } from 'react'
import Filter from './FilterCourses'
import { Container, Typography, Box } from '@mui/material'


const CoursesList = ({ courses }) => {
  const [filter, setFilter] = useState('')

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const coursesToShow = filter === '' ? courses : courses.filter(
    (c) => c.title.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <Container sx={{ marginTop: '4rem' }}>
      <Typography
        sx={{
          fontSize: '2.5rem',
          textAlign: 'center',
          '@media (max-width: 442px)': {
            fontSize: '1.5rem',
          },
        }}
      >Courses</Typography>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
        textAlign: 'center',
        gap: '1rem',
        marginBottom: '2rem'
      }}>

        <Box sx={{ marginTop: '1rem', marginBottom: '1rem', textAlign: 'center' }}>
          <Filter filter={filter} handleFilterChange={handleFilterChange} />
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: '100%',
          textAlign: 'center',
          gap: '1rem',
          marginBottom: '2rem' }}>
          {coursesToShow.map((course) => (
            <Course key={course.id} course={course} />
          ))}
        </Box>
      </Box>
    </Container>
  )
}


export default CoursesList