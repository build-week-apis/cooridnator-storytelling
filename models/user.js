const db = require('../data/dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('users').select('id', 'username', 'password', 'email', 'country', 'role');
}

function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  const [id] = await db('users').insert(user, "id");
  const newUser = await db('users')
          .where({ id })
          .first();

  return newUser;
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}