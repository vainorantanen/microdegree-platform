import React from 'react'
import { Link } from 'react-router-dom'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'


const Course = ({ course }) => {
  var imagesource = course.user.imageurl
  if (course.user.imageurl === undefined) {
    imagesource =
      'https://www.logodesign.net/logo/tower-crane-with-buildings-under-construction-1312ld.png'
  }
  return (
    <TableRow>
      <TableCell>
        <Link to={`/courses/${course.id}`}>{course.title}</Link>
      </TableCell>
      <TableCell>{course.likes}</TableCell>
      <TableCell>{course.company}</TableCell>
      <TableCell>
        <img
          src={`${imagesource}`}
          alt='course logo'
          style={{
            border: '1px solid black',
            borderRadius: '10%',
            height: '5rem',
            width: '5rem',
          }}
        ></img>
      </TableCell>
    </TableRow>
  )
}

export default Course
