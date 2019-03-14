const express = require('express');
const router = express.Router();
const db = require('../data/dbConfig');
const bcrypt = require('bcrypt');

const Users = require('../models/user');

const mdl = require('../extra/middleware');


router.post('/register', (req, res) => {
    let user = req.body;

    if(!user.password){
        res.status(400).json({ message: 'No password provided' })
    }

    const hash = bcrypt.hashSync(user.password, 12)
    user.password = hash;

    if(!user.username){
        res.status(400).json({ message: 'Username not provided' })
    } else if(!user.country){
        res.status(400).json({ message: 'Users country not provided'})
    } else if(!user.title){
        res.status(400).json({ message: 'No title provided' })
    } else {
    Users.add(user)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
      });
    }
  });
  
router.post('/login', (req, res) => {
    let { email, password } = req.body;
  
    Users.findBy({ email })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = mdl.generateToken(user); // new
          if(token){
          res.status(200).json({
            curid: user.id,
            curemail: user.email,
            token
          });
        } else {
            res.status(500).json({ msg: 'Could not generate token'});
        }
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        res.status(500).json(error, {message: "OOP"});
      });
});

module.exports = router;