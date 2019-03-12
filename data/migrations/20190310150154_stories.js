
exports.up = function(knex, Promise) {
    return knex.schema.createTable('stories', tbl => {
        tbl.increments()
        tbl.string("story_title")
           .notNullable()
        tbl.string("story_description")
           .notNullable()
        tbl.string("story_country")
           .notNullable()
        tbl.foreign("story_country").references("country").inTable('users')
        tbl.timestamp('create_date').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('stories')
};
