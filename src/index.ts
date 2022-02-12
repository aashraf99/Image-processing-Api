import express from 'express';
import { images } from './routes/image';

const app = express();
app.use('/api/images', images);
app.get('/api', (req, res) => {
    res.send('welcom to Image resizer project');
});

app.listen(3000, () => {
    console.log('listening on port 3000!');
});

export default app;
