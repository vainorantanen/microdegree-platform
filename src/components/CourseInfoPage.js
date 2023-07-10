import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Button, Typography } from '@mui/material'

const CourseInfoPage = ({ courses, like }) => {

  const id = useParams().id
  const course = courses.find(c => c.id === id)
  if (!course) {
    return null
  }
  return (
    <Container>
      <Typography variant="h1">{course.title}</Typography>
      <Typography>Likes: {course.likes}</Typography>
      <Typography>
    Have you completed this course? Did you like it? Let us know!
      </Typography>
      <Button onClick={() => like(course)}>Like</Button>
      <Typography variant="h3">Course description</Typography>
      {!course.description && (
        <Typography>
      Its a mystery!
        </Typography>
      )}
      {course.description && (
        <Typography style={{ whiteSpace: 'break-spaces' }}>
          {course.description}
        </Typography>
      )}
      <Typography variant="h3">
    Apply here: <a href="#">{course.url}</a>
      </Typography>
      <Typography variant="h4">By {course.company}</Typography>
      <img
        src={`${course.user.imageurl}`}
        alt="Image of company logo"
        style={{
          border: '2px solid black',
          borderRadius: '10%',
          height: '20%',
          width: '20%',
        }}
      />
    </Container>

  )
}

export default CourseInfoPage