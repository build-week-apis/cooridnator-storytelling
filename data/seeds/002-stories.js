exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stories')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('stories').insert([
        {
          story_title: 'A Story Title',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'peru',
          user_id: 1
        },
        {
          story_title: 'A Story Title',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'brazil',
          user_id: 2
        },
        {
          story_title: 'A Story Title',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'bolivia',
          user_id: 3
        },
        {
          story_title: 'A Story Title',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'cambodia',
          user_id: 4
        },
        {
          story_title: 'A Story Title',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'colombia',
          user_id: 5
        },
        {
          story_title: 'A Story Title',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'ecuador',
          user_id: 6
        },
        {
          story_title: 'A Story Title',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'el salvador',
          user_id: 7
        },
        {
          story_title: 'A Story Title',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'ghana',
          user_id: 8
        },
        {
          story_title: 'A Story Title',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'guatemala',
          user_id: 9
        },
        {
          story_title: 'A Story Title',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'haiti',
          user_id: 10
        },
        {
          story_title: 'A Story Title',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'honduras',
          user_id: 11
        },
        {
          story_title: 'A Story Title',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'kiribati',
          user_id: 12
        },
        {
          story_title: 'A Story Title',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'madagascar',
          user_id: 13
        },
        {
          story_title: 'A Story Title',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'mongolia',
          user_id: 14
        },
        {
          story_title: 'A Story Title',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'nicaragua',
          user_id: 15
        },
        {
          story_title: 'A Story Title',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'paraguay',
          user_id: 16
        },
        {
          story_title: 'A Story Title',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'peru',
          user_id: 17
        },
        {
          story_title: 'A Story Title',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'philippines',
          user_id: 18
        },
        {
          story_title: 'A Story Title',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'sierra leone',
          user_id: 19
        },
        {
          story_title: 'A Story Title',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'zimbabwe',
          user_id: 20
        },
        {
          story_title: 'A Story Title',
          story_description:
            "That's a son of a gun of a cloud. We'll paint one happy little tree right here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no pressure. You are just a whisper floating across a mountain. In painting, you have unlimited power. You have the ability to move mountains. We'll lay all these little funky little things in there. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective. It is a lot of fun. There comes a nice little fluffer. Everyone is going to see things differently - and that's the way it should be. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. That's crazy. Just take out whatever you don't want. It'll change your entire perspective.",
          story_country: 'brazil',
          user_id: 21
        }
      ]);
    });
};
