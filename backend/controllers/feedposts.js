const router = require('express').Router()
const FeedPost = require('../models/feedpost')

const { userExtractor } = require('../utils/middleware')

router.get('/', async (request, response) => {
  const feedPosts = await FeedPost
    .find({})

  response.json(feedPosts)
})

router.post('/', userExtractor, async (request, response) => {
  //console.log("RBODY", request.body)
  const { title, likes, description } = request.body
  //console.log("aINFO", additionalinfo)
  const feedPost = new FeedPost({
    title,
    likes: likes ? likes : 0,
    description : description
  })

  const user = request.user

  if (!user) {
    return response.status(401).json({ error: 'operation not permitted' })
  }

  feedPost.user = user._id

  let createdFeedPost = await FeedPost.save()

  user.feedPosts = user.feedPosts.concat(createdFeedPost._id)
  await user.save()

  createdFeedPost = await FeedPost.findById(createdFeedPost._id).populate('user')

  response.status(201).json(createdFeedPost)
})

router.put('/:id', async (request, response) => {
  const { title, likes, description } = request.body

  let updatedFeedPost = await FeedPost.findByIdAndUpdate(request.params.id,  { title, likes, description }, { new: true })

  updatedFeedPost = await FeedPost.findById(updatedFeedPost._id).populate('user')

  response.json(updatedFeedPost)
})
/*
router.delete('/:id', userExtractor, async (request, response) => {
  const blog = await Blog.findById(request.params.id)

  const user = request.user

  if (!user || blog.user.toString() !== user.id.toString()) {
    return response.status(401).json({ error: 'operation not permitted' })
  }

  user.blogs = user.blogs.filter(b => b.toString() !== blog.id.toString() )

  await user.save()
  await blog.remove()

  response.status(204).end()
})
*/
module.exports = router