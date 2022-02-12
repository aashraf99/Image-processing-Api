import supertest from 'supertest';
import app from '../index';
const request = supertest(app);
describe('Test Endpoints', () => {
    it('/api', async () => {
        const res = await request.get('/api');
        expect(res.statusCode).toBe(200);
    });
    it('/api/images', async () => {
        const res = await request.get('/api/images');
        expect(res.statusCode).toBe(200);
    });
});
