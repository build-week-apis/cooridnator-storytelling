exports.seed = function(knex, Promise) {
  return knex('test')
    .truncate()
    .then(function() {
      return knex('test').insert([
        {
          title: 'Test for prod database',
          content:
            'Here is a haiku:\n Nightfall,\n Too dark to read the page\n Too cold.\n - Jack Kerouac'
        }
      ]);
    });
};
