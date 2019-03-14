const request = require('supertest');

const server = require('./auth');

describe('auth.js', () => {
  describe('POST /Register', () => {

    it("should return 201", async () => {
      const game = {
          username: 'dood',
          password: 'dood',
          email: 'dood@leland.net',
          country: 'peru',
          title: 'Backend dude',
          role: 'coordinator'
    };
      const response = await request(server)
        .post("/register")
        .send(game);
      expect(response.status).toEqual(201);
})

  });
});