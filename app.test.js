const request = require('supertest');
const app = require('./app');

describe('Student Management API Testing', () => {
    it('GET /api/students should return all students', async () => {
        const res = await request(app).get('/api/students');
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBe(2);
    });

    it('POST /api/students should insert a new record', async () => {
        const res = await request(app).post('/api/students').send({ name: 'Charlie', course: 'Kubernetes' });
        expect(res.statusCode).toBe(201);
        expect(res.body.name).toBe('Charlie');
    });
});