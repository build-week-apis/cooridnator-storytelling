const stories = require('./stories');
const users = require('./users');
const express = require('express');
const router = express.Router();

router.use('/api/users/', users);
router.use('/api/stories/', stories);

module.exports = router;