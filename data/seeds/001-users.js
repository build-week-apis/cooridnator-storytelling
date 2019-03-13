exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'Leland',
          password: 'thiswillbehidden',
          email: 'leland@leland.net',
          country: 'peru',
          title: 'Backend dude',
          role: 'coordinator'
        },
        {
          username: 'Ryan',
          password: 'thiswillbehidden',
          email: 'ryan@ryan.net',
          country: 'brazil',
          title: 'Team dude',
          role: 'coordinator'
        },
        {
          username: 'Nick',
          password: 'thiswillbehidden',
          email: 'nick@nick.net',
          country: 'bolivia',
          title: 'UI dude',
          role: 'coordinator'
        },
        {
          username: 'Emily',
          password: 'thiswillbehidden',
          email: 'emily@emily.net',
          country: 'cambodia',
          title: 'Backend dude',
          role: 'coordinator'
        },
        {
          username: 'Nina',
          password: 'thiswillbehidden',
          email: 'nina@nina.net',
          country: 'colombia',
          title: 'Backend dude',
          role: 'coordinator'
        },
        {
          username: 'Ireland',
          password: 'thiswillbehidden',
          email: 'ireland@ireland.net',
          country: 'ecuador',
          title: 'Backend dude',
          role: 'coordinator'
        },
        {
          username: 'Gary',
          password: 'thiswillbehidden',
          email: 'gary@gary.net',
          country: 'el salvador',
          title: 'Backend dude',
          role: 'coordinator'
        },
        {
          username: 'James',
          password: 'thiswillbehidden',
          email: 'james@james.net',
          country: 'ghana',
          title: 'Backend dude',
          role: 'coordinator'
        },
        {
          username: 'Karen',
          password: 'thiswillbehidden',
          email: 'karen@karen.net',
          country: 'guatemala',
          title: 'Backend dude',
          role: 'coordinator'
        },
        {
          username: 'Mary',
          password: 'thiswillbehidden',
          email: 'mary@mary.net',
          country: 'haiti',
          title: 'Backend dude',
          role: 'coordinator'
        },
        {
          username: 'Doug',
          password: 'thiswillbehidden',
          email: 'doug@doug.net',
          country: 'honduras',
          title: 'Backend dude',
          role: 'coordinator'
        },
        {
          username: 'Lauren',
          password: 'thiswillbehidden',
          email: 'lauren@lauren.net',
          country: 'kiribati',
          title: 'Backend dude',
          role: 'coordinator'
        },
        {
          username: 'Noah',
          password: 'thiswillbehidden',
          email: 'noah@noah.net',
          country: 'madagascar',
          title: 'Backend dude',
          role: 'coordinator'
        },
        {
          username: 'Kelsey',
          password: 'thiswillbehidden',
          email: 'kelsey@kelsey.net',
          country: 'mongolia',
          title: 'Backend dude',
          role: 'coordinator'
        },
        {
          username: 'Nathan',
          password: 'thiswillbehidden',
          email: 'nathan@nathan.net',
          country: 'nicaragua',
          title: 'Backend dude',
          role: 'coordinator'
        },
        {
          username: 'Kim',
          password: 'thiswillbehidden',
          email: 'kim@kim.net',
          country: 'paraguay',
          title: 'Backend dude',
          role: 'coordinator'
        },
        {
          username: 'Ted',
          password: 'thiswillbehidden',
          email: 'ted@ted.net',
          country: 'peru',
          title: 'Backend dude',
          role: 'coordinator'
        },
        {
          username: 'Andrew',
          password: 'thiswillbehidden',
          email: 'andrew@andrew.net',
          country: 'philippines',
          title: 'Backend dude',
          role: 'coordinator'
        },
        {
          username: 'Phil',
          password: 'thiswillbehidden',
          email: 'phil@phil.net',
          country: 'sierra leone',
          title: 'Backend dude',
          role: 'coordinator'
        },
        {
          username: 'Derrek',
          password: 'thiswillbehidden',
          email: 'derrek@derrek.net',
          country: 'zimbabwe',
          title: 'Backend dude',
          role: 'coordinator'
        },
        {
          username: 'Austen',
          password: 'thiswillbehidden',
          email: 'austen@austen.net',
          country: 'brazil',
          title: 'Backend dude',
          role: 'coordinator'
        }
      ]);
    });
};
