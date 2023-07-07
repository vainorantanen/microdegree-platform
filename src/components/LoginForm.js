import React from 'react'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const LoginForm = ({ login }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    await login(username, password)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control
          id='username'
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />

        <Form.Label>Password</Form.Label>
        <Form.Control
          id='password'
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <Button style={ { marginTop : '2%' } } id='login-button' type="submit">
        Login
        </Button>
      </Form.Group>
    </Form>
  )
}

export default LoginForm