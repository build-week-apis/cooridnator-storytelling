const express = require('express');
const router = express.Router();
const db = require('../data/dbConfig');

const mdl = require('../extra/middleware');

const Stories = require('../models/stories');

router.get('/', async (req, res) => {
    try {
        const stories = await db('stories'); 
        res.status(200).json(stories);
      } catch (error) {
        res.status(500).json(error);
  }
})

router.post('/', mdl.restricted, (req, res) => {
  let story = req.body;

  Stories.add(story)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/:id', async (req, res) => {
  try {
    const story = await db('stories')
      .where({ id: req.params.id })
      .first();
    res.status(200).json(story);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id', mdl.restricted, async (req, res) => {
  if(!req.body.username) {
    res.status(400).json({ errormsg: 'Please enter a username' });
    return;
  }
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