import React from 'react'
import { Link } from 'react-router-dom'

const Course = ({ course }) => {
  //console.log('URL', course.user.imageurl)
  var imagesource = course.user.imageurl
  if (course.user.imageurl === undefined) {
    imagesource = 'https://www.logodesign.net/logo/tower-crane-with-buildings-under-construction-1312ld.png'
  }
  return (
    <tr>
      <td><Link to={`/courses/${course.id}`} >{course.title}</Link></td><td>{course.likes}</td><td>{course.company}</td>
      <td><img src={`${imagesource}`}
        alt='course logo'
        style={ { border : '1px solid black',
          borderRadius : '10%', height : '5rem', width : '5rem' } }
      ></img></td>
    </tr>
  )
}

export default Course