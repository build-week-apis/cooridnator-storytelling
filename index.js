const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bcrypt = require('bcrypt');
const router = require('./routes/index.js')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/', router);


const port = process.env.PORT || 5000;

server.listen(port, () =>
  console.log(`\n Server has started on port ${port} \n`)
);

module.exports = server;