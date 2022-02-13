"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const sharpModule_1 = __importDefault(require("../Modules/sharpModule"));
exports.default = (req, res) => {
    const fname = req.query.fname;
    const width = req.query.width;
    const height = req.query.height;
    if (fname == null) {
        //check if file name not empty
        return res.send('Error: input file is missing');
    }
    else if (width == null || height == null) {
        //check if width or height not empty
        return res.send('height or width not entered');
    }
    else if (Number(height) <= 0 || Number(width) <= 0) {
        //check if width and height are valide
        return res.send('height and width must be more than 0');
    }
    else {
        try {
            //used sharp to resize Image and store it in thumb folder
            (0, sharpModule_1.default)(fname, Number(height), Number(width)).then(() => {
                return res.sendFile(path_1.default.resolve('assets/thumb/' + fname + '_thumb.jpg'));
            }).catch((e) => {
                res.send("some thing faild in image proccess");
            });
        }
        catch (e) {
            console.error(e);
            return res.send(e);
        }
    }
};
