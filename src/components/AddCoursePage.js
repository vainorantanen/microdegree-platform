import { React, useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const AddCoursePage = ({ addCourse }) => {
  const [title, setTitle] = useState('')
  const [company, setCompany] = useState('')
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('handlesubmit', description)
    await addCourse({ title, company, url, description })
    setCompany('')
    setDescription('')
    setTitle('')
    setUrl('')
  }

  return (
    <div>
      <h4>Add a new course!</h4>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Course title</Form.Label>
          <Form.Control
            id='title'
            placeholder='title'
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
          <Form.Label>Company name</Form.Label>
          <Form.Control
            id='company'
            placeholder='company'
            value={company}
            onChange={({ target }) => setCompany(target.value)}
          />
          <Form.Label>URL to course page</Form.Label>
          <Form.Control
            id='url'
            placeholder='url'
            value={url}
            onChange={({ target }) => setUrl(target.value)}
          />
          <Form.Label>Course description</Form.Label>
          <Form.Control
            id='additionalinfo'
            as='textarea'
            placeholder='Course description'
            value={description}
            onChange={({ target }) => setDescription(target.value)}
          />
          <Button style={ { marginTop : '2%' } } type="submit">Add!</Button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default AddCoursePage