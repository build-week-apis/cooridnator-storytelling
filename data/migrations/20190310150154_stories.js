
exports.up = function(knex, Promise) {
    return knex.schema.createTable('stories', tbl => {
        tbl.increments()
        tbl.string("title")
           .notNullable()
        tbl.string("description")
           .notNullable()
        tbl.string("country")
           .notNullable()
        tbl.foreign("country").references("country").inTable('users')
        tbl.timestamp('create_date').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('stories')
};
