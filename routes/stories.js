const express = require('express');
const router = express.Router();
const db = require('../data/dbConfig');

router.get('/', async (req, res) => {
    try {
        const stories = await db('stories'); 
        res.status(200).json(stories);
      } catch (error) {
        res.status(500).json(error);
  }
})

module.exports = router;