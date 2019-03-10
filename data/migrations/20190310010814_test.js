exports.up = function(knex, Promise) {
  return knex.schema.createTable('test', table => {
    table.increments();
    // Title
    table.string('title', 255).notNullable();
    // Content
    table.text('content').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('test');
};
