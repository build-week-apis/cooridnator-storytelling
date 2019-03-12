const db = require('../data/dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('stories').select('story_title', 'story_description', 'story_country', 'story_user');
}

function findBy(filter) {
  return db('stories').where(filter);
}

async function add(user) {
  const [id] = await db('stories').insert(user);

  return findById(id);
}

function findById(id) {
  return db('stories')
    .where({ id })
    .first();
}