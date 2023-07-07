import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


const CompanyInfoPage = ({ users }) => {
  const id = useParams().id
  const company = users.find(c => c.id === id)
  if (!company) {
    return null
  }
  return (
    <div style={ { margin : '15%' } }>
      <h1>{company.name}</h1><img src={`${company.imageurl}`}
        alt='company logo' style={ { border: '1px solid black', borderRadius : '5%',
          margin : '3%' } }
      ></img>
      <h2>Micro degrees by {company.name}</h2>
      {company.courses.length === 0 && <p>None yet!</p>}
      {company.courses.length > 0 &&
        <ul>
          {company.courses.map(c => (
            <li key={c.id}><Link to={`/courses/${c.id}`} >{c.title}</Link></li>
          ))}
        </ul>
      }
    </div>
  )
}

export default CompanyInfoPage