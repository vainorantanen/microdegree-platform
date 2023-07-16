import React from 'react'
import { Typography, Box } from '@mui/material'

const FeedPostCard = ({ post }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'white',
        textAlign: 'center',
        padding: '2rem',
        boxShadow: '0.3rem 0.3rem 0.3rem',
        maxWidth: '30rem',
        borderRadius: '1rem',
        marginBottom: '1rem',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Typography>{post.user.name}</Typography>
      <Typography>
        {post.description}
      </Typography>
    </Box>
  )
}

export default FeedPostCard