
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments()
      tbl.string("username")
         .unique()
         .notNullable()
      tbl.string("password")
         .notNullable()
      tbl.string("email")
         .notNullable()
      tbl.string("country")
         .notNullable()
      tbl.string("title")
         .notNullable()
      tbl.string("role")
         .notNullable()

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
