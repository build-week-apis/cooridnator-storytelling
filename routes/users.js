const express = require('express');
const router = express.Router();
const db = require('../data/dbConfig');
const bcrypt = require('bcrypt');

const Users = require('../models/user');

const mdl = require('../extra/middleware');

router.get('/', async (req, res) => {
    try {
        const users = await Users.find();
    
        res.json(users);
      } catch (error) {
        res.send(error);
  }
})

router.get('/:id', async (req, res) => {
    try {
      const user = await db('users')
        .where({ id: req.params.id })
        .first();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
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
        const user = await db('users')
          .where({ id: req.params.id })
          .first();
  
        res.status(200).json(user);
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