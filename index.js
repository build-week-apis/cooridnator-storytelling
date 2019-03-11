const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bcrypt = require('bcrypt');
const router = require('./routes')

const server = express();
const db = require('./data/dbConfig');

//MODELS


//

const jwt = require("jsonwebtoken");

const secret = "Coordinated"


server.use(helmet);
server.use(express.json());
server.use(cors);
server.use('/', router);


const port = process.env.PORT || 5000;

server.listen(port, () =>
  console.log(`\n Server has started on port ${port} \n`)
);
