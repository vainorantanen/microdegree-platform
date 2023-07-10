import React from 'react'
import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'


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

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          id="title"
          label="Course title"
          placeholder="title"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
        <TextField
          id="company"
          label="Company name"
          placeholder="company"
          value={company}
          onChange={({ target }) => setCompany(target.value)}
        />
        <TextField
          id="url"
          label="URL to course page"
          placeholder="url"
          value={url}
          onChange={({ target }) => setUrl(target.value)}
        />
        <TextField
          id="additionalinfo"
          label="Course description"
          placeholder="Course description"
          multiline
          rows={4}
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />
        <Button
          variant="contained"
          type="submit"
          style={{ marginTop: '2%' }}
        >
          Add!
        </Button>
      </Box>
    </div>
  )
}

export default AddCoursePage
