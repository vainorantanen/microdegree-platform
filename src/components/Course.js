import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Typography } from '@mui/material'


const Course = ({ course }) => {
  var imagesource = course.user.imageurl
  if (course.user.imageurl === undefined) {
    imagesource =
      'https://www.logodesign.net/logo/tower-crane-with-buildings-under-construction-1312ld.png'
  }
  return (
    <Container sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', boxShadow: '0.5rem 0.5rem 0.5rem',
      marginBottom: '1rem',
      backgroundColor: 'white',
      justifyContent: 'space-around',
      borderRadius: '2rem',
      '&:hover': {
        transform: 'scale(1.05)',
      }
    }}>
      <Typography component={Link} to={`/courses/${course.id}`}
        sx={{ textDecoration: 'none', }}
      >{course.title}</Typography>
      <Typography>{course.likes}</Typography>
      <Typography>{course.company}</Typography>
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
    </Container>

  )
}

export default Course
