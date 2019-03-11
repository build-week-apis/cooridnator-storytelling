
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stories').del()
    .then(function () {
      // Inserts seed entries
      return knex('stories').insert([
        {
          title: "A Story",
          description: "What happened in the story and all the details.",
          country: "Peru"
        }
      ]);
    });
};
