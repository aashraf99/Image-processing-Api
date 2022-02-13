//check if image stored in cachedImg file to send it to the user with out calling resizer function

import { NextFunction, Request, Response } from 'express';
import path from 'path';
import sharp from 'sharp';
import fs from 'fs';
export default async (req: Request, res: Response, next: NextFunction) => {
    const fname: unknown = req.query.fname;
    const width: unknown = req.query.width;
    const height: unknown = req.query.height;
    if (fs.existsSync(path.resolve('assets/thumb/' + fname + '_thumb.jpg'))) {
        const metadata = await sharp(
            path.resolve('assets/thumb/' + fname + '_thumb.jpg')
        ).metadata();
        if (
            metadata.height == Number(height) &&
            metadata.width == Number(width)
        ) {
            return res.sendFile(
                path.resolve('assets/thumb/' + fname + '_thumb.jpg')
            );
        }
        return next();
    }
    return next();
};
