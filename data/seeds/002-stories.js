
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stories').del()
    .then(function () {
      // Inserts seed entries
      return knex('stories').insert([
        {
          story_title: "A Story",
          story_description: "What happened in the story and all the details.",
          story_country: "Peru"
        }
      ]);
    });
};
