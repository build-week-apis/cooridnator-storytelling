const request = require('supertest');

const server = require('./index.js');

describe('server.js', () => {
  describe('GET /api/stories', () => {
    it('should return 200 OK', () => {
      return request(server)
        .get('/api/stories')
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it('should return JSON', async () => {
      const res = await request(server).get('/api/stories');

      expect(res.type).toBe('application/json');
    });

  });

  describe('POST /api/register', () => {
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
          .post("/api/register")
          .send(game);
        expect(response.status).toEqual(201);
    })
  })

  
  describe('POST /api/login', () => {
    it("should return 201", async () => {
        const game = {
          password: 'dood',
          email: 'dood@leland.net'
          };
        const response = await request(server)
          .post("/api/login")
          .send(game);
        expect(response.status).toEqual(200);
    })
  })

  // describe('GET /api/users', () => {
  //   it('should return 200 OK', () => {
  //     return request(server)
  //       .get('/api/users')
  //       .then(res => {
  //         expect(res.status).toBe(200);
  //       });
  //   });

  //   it('should return JSON', async () => {
  //     const res = await request(server).get('/api/users');

  //     expect(res.type).toBe('application/json');
  //   });

  // });
}); 