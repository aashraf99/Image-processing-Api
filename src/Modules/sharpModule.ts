import sharp from 'sharp';
import path from 'path';

export default (fname: string, height: number, width: number) => {
    return sharp(path.resolve('assets/full/' + fname + '.jpg'))
        .resize({ height: height, width: width })
        .toFile(path.resolve('assets/thumb/' + fname + '_thumb.jpg'));
};
