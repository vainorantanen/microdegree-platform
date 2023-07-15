import { Container } from '@mui/material'
import React from 'react'
import FeedHeader from './FeedHeader'
import FeedItems from './FeedItems'

const Feed = () => {
  return (
    <Container sx={{ marginTop: '8rem' }}>
      <FeedHeader />
      <FeedItems />
    </Container>
  )
}

export default Feed