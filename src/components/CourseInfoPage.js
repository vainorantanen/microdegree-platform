import React from 'react'
import { useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const CourseInfoPage = ({ courses, like }) => {

  const id = useParams().id
  const course = courses.find(c => c.id === id)
  if (!course) {
    return null
  }
  return (
    <div style={ { margin : '15%' } }>
      <h1>{course.title}</h1>
      <p>Likes: {course.likes}</p>
      <p>Have you completed this course? Did you like it? Let us know!</p>
      <Button onClick={() => like(course)}>Like</Button>
      <h3>Course description</h3>
      {!course.description &&
      <p>
       Its a mystery!
      </p>}
      {course.description &&
        <p style={ { whiteSpace : 'break-spaces' } }>
          {course.description}
        </p>
      }
      <h3>Apply here:  <a href='#'> {course.url}</a></h3>
      <h4>By {course.company}</h4>
      <img src={`${course.user.imageurl}`}
        alt='Image of company logo'
        style={ { border : '2px solid black',
          borderRadius : '10%', height : '20%', width : '20%' } }></img>
    </div>
  )
}

export default CourseInfoPage