const express = require('express');
const router = express.Router();
const db = require('../data/dbConfig');

router.get('/', async (req, res) => {
    try {
        const users = await db('users'); 
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json(error);
  }
})

router.get('/:id', async (req, res) => {
    try {
      const student = await db('users')
        .where({ id: req.params.id })
        .first();
      res.status(200).json(student);
    } catch (error) {
      res.status(500).json(error);
    }
});

const errors = {
    '19': 'Another record with that value exists',
  };
  
  router.post('/', async (req, res) => {
    if(!req.body.username) {
      res.status(400).json({ errormsg: 'Please enter a username' });
      return;
    }
    try {
      const [id] = await db('users').insert(req.body);
  
      const student = await db('users')
        .where({ id })
        .first();
  
      res.status(201).json(student);
    } catch (error) {
      const message = errors[error.errno] || 'We ran into an error';
      res.status(500).json({ message, error });
    }
});

router.put('/:id', async (req, res) => {
    if(!req.body.username) {
      res.status(400).json({ errormsg: 'Please enter a username' });
      return;
    }
    try {
      const count = await db('users')
        .where({ id: req.params.id })
        .update(req.body);
  
      if (count > 0) {
        const student = await db('users')
          .where({ id: req.params.id })
          .first();
  
        res.status(200).json(student);
      } else {
        res.status(404).json({ message: 'Records not found' });
      }
    } catch (error) {}
  });
  
  
  router.delete('/:id', async (req, res) => {
    try {
      const count = await db('users')
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