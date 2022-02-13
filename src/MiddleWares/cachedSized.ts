//check if image stored in cachedImg file to send it to the user with out calling resizer function

import { NextFunction, Request, Response } from 'express';
import path from 'path';
export default (req: Request, res: Response, next: NextFunction) => {
    const fname: unknown = req.query.fname;
    const width: unknown = req.query.width;
    const height: unknown = req.query.height;
    interface size {
        width: number;
        height: number;
    }

    const cached_sized: size[] = [
        // some sized that normally used
        { width: 200, height: 200 },
        { width: 150, height: 150 },
        { width: 500, height: 500 },
    ];
    const findSize: size | undefined = cached_sized.find((size) => {
        return size.height == Number(height) && size.width == Number(width);
    });
    if (findSize) {
            return res.sendFile(
                path.resolve(
                    'assets/cachedImg/' + fname + width + 'x' + height + '.jpg'
                )
            );    
    }
    next();
};
