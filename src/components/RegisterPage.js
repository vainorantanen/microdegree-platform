import React, { useState } from 'react'
import { TextField, Button, Typography, Box } from '@mui/material'

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
    <Box sx={{ marginTop: '5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '3rem' }}>
      <Typography sx={{
        fontSize: '2rem',
        textAlign: 'center',
        '@media (max-width: 442px)': {
          fontSize: '1.5rem',
        },
      }}>
        Create a new user
      </Typography>
      <Box sx={{ maxWidth: '30rem', }} component="form" onSubmit={handleSubmit}>
        <TextField
          id="username"
          label="Username"
          required
          fullWidth
          value={username}
          onChange={({ target }) => setUsername(target.value)}
          margin="normal"
        />
        <TextField
          id="name"
          label="Company name"
          required
          fullWidth
          value={name}
          onChange={({ target }) => setName(target.value)}
          margin="normal"
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          required
          fullWidth
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          margin="normal"
        />
        <TextField
          id="imageurl"
          label="Logo URL"
          fullWidth
          value={imageurl}
          onChange={({ target }) => setImageurl(target.value)}
          margin="normal"
        />
        <Button variant="contained" type="submit"
          sx={{ backgroundColor: 'blue', color: 'white',
            transition: 'transform 0.3s',
            marginTop: '1rem',
            '&:hover': {
              transform: 'scale(1.05)',
              backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)' },
          }}
        >
          Register!
        </Button>
      </Box>
    </Box>
  )
}

export default RegisterPage
