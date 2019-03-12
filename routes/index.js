const stories = require('./stories');
const users = require('./users');
const auth = require('./auth');
const express = require('express');
const router = express.Router();

router.use('/api/users', users);
router.use('/api/stories', stories);
router.use('/api', auth)

module.exports = router;