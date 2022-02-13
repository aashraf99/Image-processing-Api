import supertest from 'supertest';
import app from '../index';
import sharpModule from '../Modules/sharpModule';
const request = supertest(app);

describe('test image resizer function', () => {
    it('check width and height', async () => {
        const res = await request.get('/api/images?fname=fjord');
        expect(res.text).toBe('height or width not entered');
    });
    it('check width and height validation', async () => {
        const res = await request.get(
            '/api/images?fname=fjord&width=0&height=-400'
        );
        expect(res.text).toBe('height and width must be more than 0');
    });
    it('check input file (missing)', async () => {
        const res = await request.get('/api/images');
        expect(res.text).toBe('Error: input file is missing');
    });
    it('check complete resize and send file successfully', async () => {
        const res = await request.get(
            '/api/images?fname=fjord&width=600&height=400'
        );
        expect(res.files).toBeTrue;
    });
    it('check sharp module', async () => {
        expect(sharpModule("fjord",300,300)).toBeTrue;
    });
});
