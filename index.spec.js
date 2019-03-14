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

  });
}); 