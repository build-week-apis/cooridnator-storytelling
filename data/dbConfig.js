// import as db
const knex = require('knex');
const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile')['development'];
module.exports = knex(config);
