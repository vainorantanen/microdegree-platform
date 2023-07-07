import React from 'react'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const RegisterPage = ({ addUser }) => {
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [imageurl, setImageurl] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    await addUser({ username, name, password, imageurl })
    setName('')
    setPassword('')
    setUsername('')
    setImageurl('')
  }

  return (
    <div>
      <h1>Create a new user</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            id='username'
            placeholder='Username'
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
          <Form.Label>Company name</Form.Label>
          <Form.Control
            id='name'
            placeholder='Company name'
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <Form.Label>Password</Form.Label>
          <Form.Control
            id='password'
            type="password"
            placeholder='Password'
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <Form.Label>Logo URL</Form.Label>
          <Form.Control
            id='imageurl'
            placeholder='Company logo/image url'
            value={imageurl}
            onChange={({ target }) => setImageurl(target.value)}
          />
          <Button style={ { marginTop : '2%' } } type="submit">Register!</Button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default RegisterPage