exports.up = function(knex, Promise) {
  return knex.schema.createTable('stories', tbl => {
    tbl.increments();
    tbl.string('story_title', 160).notNullable();
    tbl.text('story_description').notNullable();
    tbl.string('story_country', 32).notNullable();
    tbl
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.timestamp('create_date').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('stories');
};
