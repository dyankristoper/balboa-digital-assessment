const request = require('supertest')
const app = require('../index.js')

describe('Book Routes', () => {
    it('Should show all books', async () => {
        const res = await request(app).get('/api/v1/books');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('books')
    });

    it('Should be able to publish a book', async () => {
        const res = await request(app).put('/api/v1/books/1/publish');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('status');
    });

    it('Should be able to unpublish a book', async () => {
        const res = await request(app).delete('/api/v1/books/1/unpublish');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('status');
    });
});