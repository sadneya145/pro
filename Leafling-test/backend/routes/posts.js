// backend/routes/posts.js
const express = require('express');
const Post = require('../models/Post');

const router = express.Router();

// Create a new post
router.post('/', async (req, res) => {
  const { userId, image, text } = req.body;

  try {
    const newPost = new Post({ userId, image, text });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while creating the post' });
  }
});

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('userId', 'username');
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching posts' });
  }
});

// Like a post
router.post('/:id/like', async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  try {
    const post = await Post.findById(id);

    if (post.likes.includes(userId)) {
      return res.status(400).json({ error: 'User has already liked this post' });
    }

    post.likes.push(userId);
    await post.save();
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while liking the post' });
  }
});

// Comment on a post
router.post('/:id/comment', async (req, res) => {
  const { id } = req.params;
  const { userId, text } = req.body;

  try {
    const post = await Post.findById(id);

    post.comments.push({ userId, text });
    await post.save();
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while commenting on the post' });
  }
});

module.exports = router;
