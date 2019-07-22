exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stories')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('stories').insert([
        {
          story_title: 'Helping Peru',
          story_description:
            "Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be.",
          story_country: 'peru',
          user_id: 1
        },
        {
          story_title: 'A Day In The Life',
          story_description:
            "here comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. T Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'brazil',
          user_id: 2
        },
        {
          story_title: 'Greetings',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'bolivia',
          user_id: 3
        },
        {
          story_title: 'Hello From Cambodia',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'cambodia',
          user_id: 4
        },
        {
          story_title: 'Orphanage Update',
          story_description:
            "Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. It'll change your entire perspective.",
          story_country: 'colombia',
          user_id: 5
        },
        {
          story_title: 'Hello There!',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'ecuador',
          user_id: 6
        },
        {
          story_title: 'A Big Win',
          story_description:
            "In painting, you have unlimited power. You have the ability to move mountains. That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain.  We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'el salvador',
          user_id: 7
        },
        {
          story_title: 'Update From Ghana',
          story_description:
            "There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun.  Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'ghana',
          user_id: 8
        },
        {
          story_title: 'A New Start',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'guatemala',
          user_id: 9
        },
        {
          story_title: 'Island Update',
          story_description:
            "We'll lay all these little funky little things in there. It is a lot of fun. That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains.  There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'haiti',
          user_id: 10
        },
        {
          story_title: 'Greetings!',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'honduras',
          user_id: 11
        },
        {
          story_title: 'Pacific Post',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'kiribati',
          user_id: 12
        },
        {
          story_title: 'Jungle Talk',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'madagascar',
          user_id: 13
        },
        {
          story_title: 'Out In Asia',
          story_description:
            "That's crazy. Just take out whatever you don't want. It'll change your entire perspective. That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul.",
          story_country: 'mongolia',
          user_id: 14
        },
        {
          story_title: 'Central America Update',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'nicaragua',
          user_id: 15
        },
        {
          story_title: 'Hello From South America',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'paraguay',
          user_id: 16
        },
        {
          story_title: 'Peru Update',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'peru',
          user_id: 17
        },
        {
          story_title: 'Greetings from the Pacific',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'philippines',
          user_id: 18
        },
        {
          story_title: 'Welcome to West Africa',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'sierra leone',
          user_id: 19
        },
        {
          story_title: 'Zimbabwe Update',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'zimbabwe',
          user_id: 20
        },
        {
          story_title: 'An Update',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'brazil',
          user_id: 21
        }
      ]);
    });
};
