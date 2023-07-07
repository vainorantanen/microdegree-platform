import React from 'react'
import Course from './Course'
import { Table } from 'react-bootstrap'
import { useState } from 'react'
import Filter from './FilterCourses'

const CoursesList = ({ courses }) => {
  const [filter, setFilter] = useState('')

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const coursesToShow = filter === '' ? courses : courses.filter(
    c => c.title.toLowerCase().includes(filter.toLowerCase())
  )
  return (
    <div>
      <h2>Courses</h2>
      <div style={ { display : 'flex' } }>
        <p style={ { marginRight : '2%' } }>Search: </p><Filter filter={filter} handleFilterChange={handleFilterChange}/>
      </div>
      <Table striped>
        <tbody>
          <tr><th>Micro degree</th><th>Likes</th><th>Company</th><th></th></tr>
          {coursesToShow.map(course =>
            <Course key={course.id} course={course} />
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default CoursesList