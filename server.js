const express = require('express');
const server = express();
const db = require('./data/dbConfig');

server.use(express.json());

// Test home route
server.get('/', (req, res) => {
  res.status(200).json({ db_test: '/db_test' });
});

// Test DB route
server.get('/db_test', async (req, res) => {
  try {
    const test = await db('test');
    res.status(200).json(test);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'There was an error accessing the database.' });
  }
});

const port = process.env.PORT || 5000;

server.listen(port, () =>
  console.log(`\n Server has started on port ${port} \n`)
);
