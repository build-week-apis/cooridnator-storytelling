const express = require('express');
const router = express.Router();
const db = require('../data/dbConfig');
const jwtV = require('jsonwebtoken');
const secret = 'CoordinateSecret';

const mdl = require('../extra/middleware');

const Stories = require('../models/stories');

router.get('/', async (req, res) => {
  try {
    const stories = await db('stories').join('users', {
      'users.id': 'stories.user_id'
    });
    stories.forEach(story => {
      story.password = null;
    });
    res.status(200).json(stories);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', mdl.restricted, (req, res) => {
  let story = {
    story_title: req.body.story_title,
    story_description: req.body.story_description,
    story_country: req.decodedJwt.country,
    user_id: req.decodedJwt.subject
  };

  if (!story.story_title) {
    res.status(400).json({ message: 'No story title' });
  } else if (!story.story_description) {
    res.status(400).json({ message: 'No story description' });
  } else if (!story.story_country) {
    res.status(400).json({ message: 'No country provided' });
  } else {
    Stories.add(story)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const story = await db('stories')
      .join('users', {
        'users.id': 'stories.user_id'
      })
      .where({ 'users.id': req.params.id })
      .first();
    story.password = null;
    res.status(200).json(story);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/users/:id', async (req, res) => {
  try {
    const story = await db('stories').where({ user_id: req.params.id });
    res.status(200).json(story);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id', mdl.restricted, async (req, res) => {
  try {
    const count = await db('stories')
      .where({ id: req.params.id })
      .update(req.body);

    if (count > 0) {
      const story = await db('stories')
        .where({ id: req.params.id })
        .first();

      res.status(200).json(story);
    } else {
      res.status(404).json({ message: 'Records not found' });
    }
  } catch (error) {}
});

router.delete('/:id', mdl.restricted, async (req, res) => {
  try {
    const count = await db('stories')
      .where({ id: req.params.id })
      .del();

    if (count > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Records not found' });
    }
  } catch (error) {}
});

module.exports = router;
