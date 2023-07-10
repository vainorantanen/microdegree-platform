import React from 'react'
import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'


const LoginForm = ({ login }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    await login(username, password)
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        id="username"
        label="Username"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />

      <TextField
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />

      <Button
        variant="contained"
        type="submit"
        style={{ marginTop: '2%' }}
      >
        Login
      </Button>
    </Box>
  )
}

export default LoginForm
