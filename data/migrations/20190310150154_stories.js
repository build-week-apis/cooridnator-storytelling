exports.up = function(knex, Promise) {
  return knex.schema.createTable('stories', tbl => {
    tbl.increments();
    tbl.string('story_title', 160).notNullable();
    tbl.string('story_description').notNullable();
    tbl.string('story_country', 32).notNullable();
    tbl.string('story_user', 64).notNullable();
    tbl
      .foreign('story_user', 'user_id')
      .references('id')
      .inTable('users');
    tbl.timestamp('create_date').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('stories');
};
