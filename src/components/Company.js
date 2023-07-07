import React from 'react'
import { Link } from 'react-router-dom'

const Company = ({ company }) => {
  return (
    <tr style={ { fontSize : '1.5rem' } }>
      <td><img src={`${company.imageurl}`} alt='Company logo'
        style={ { border : '1px solid black',
          borderRadius : '10%', height : '5rem', width : '5rem' } }></img></td>
      <td><Link to={`/companies/${company.id}`} >{company.name}</Link></td>
    </tr>
  )
}

export default Company