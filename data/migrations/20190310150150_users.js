exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments('id');
    tbl
      .string('username', 64)
      .unique()
      .notNullable();
    tbl.string('password', 64).notNullable();
    tbl
      .string('email', 64)
      .unique()
      .notNullable();
    tbl.string('country', 64).notNullable();
    tbl.string('title', 96).notNullable();
    tbl.string('role', 32).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
