import React from 'react'
import Course from './Course'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import Filter from './FilterCourses'
import { Container } from '@mui/material'


const CoursesList = ({ courses }) => {
  const [filter, setFilter] = useState('')

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const coursesToShow = filter === '' ? courses : courses.filter(
    (c) => c.title.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <Container>
      <Typography variant="h2">Courses</Typography>
      <div style={{ display: 'flex', marginRight: '2%' }}>
        <Typography style={{ marginRight: '2%' }}>Search: </Typography>
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Micro degree</TableCell>
              <TableCell>Likes</TableCell>
              <TableCell>Company</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coursesToShow.map((course) => (
              <Course key={course.id} course={course} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}


export default CoursesList