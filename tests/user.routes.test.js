const request = require('supertest');
const app = require('../index.js');

describe('User Routes', () => {
    const user = {
        username: 'user',
        password: 'root'
    }

    it('Should be able to signup', async () => {
        const res = await request(app).post('/api/v1/auth/signup', user);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('status')
    });

    it('Should be able to authenticate', async () => {
        const res = await request(app).post('/api/v1/auth/login', user);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('token')
    }); 
}, 30000);