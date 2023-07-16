import React from 'react'
import { useState } from 'react'
import {
  TextField,
  Button,
  Typography,
  Container,
  Box
} from '@mui/material'

import feedPostService from '../../services/feedposts'

const AddFeedPostForm = ({ feedPosts, setFeedPosts }) => {
  const [description, setDescription] = useState('')

  const addFeedPost = async (newPost) => {
    const addedPost = await feedPostService.create(newPost)
    //notifyWith(`A new course '${newCourse.title}' by '${newCourse.company}' added`)
    setFeedPosts(feedPosts.concat(addedPost))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('handlesubmit', description)
    await addFeedPost({ description })
    setDescription('')
  }

  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Typography
        sx={{
          fontSize: '3rem',
          textAlign: 'center',
          '@media (max-width: 442px)': {
            fontSize: '1.5rem',
          },
        }}
      >
          Write a post
      </Typography>

      <Box component="form" onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '2rem',
          marginBottom: '2rem',
          width: '100%',
          maxWidth: '30rem',
        }}
      >
        <TextField
          id="description"
          label="Write your post here..."
          //placeholder="Course description"
          multiline
          rows={4}
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          sx={{ marginBottom: '1rem' }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ backgroundColor: 'blue', color: 'white',
            transition: 'transform 0.3s',
            marginTop: '1rem',
            marginBottom: '1rem',
            '&:hover': {
              transform: 'scale(1.05)',
              backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)' }
          }}
        >
          Add!
        </Button>
      </Box>
    </Container>
  )
}

export default AddFeedPostForm