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

module.exports = router;