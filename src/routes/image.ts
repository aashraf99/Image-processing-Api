import express, { Request, Response } from 'express';
import imageResizer from '../utilities/imageResizer';
import cachedSized from '../MiddleWares/cachedSized';
const images = express.Router();
images.get('/', cachedSized, (req: Request, res: Response) => {
    return imageResizer(req, res);
});

export { images };
