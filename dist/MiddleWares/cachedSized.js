"use strict";
//check if image stored in cachedImg file to send it to the user with out calling resizer function
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
exports.default = (req, res, next) => {
    const fname = req.query.fname;
    const width = req.query.width;
    const height = req.query.height;
    const cached_sized = [
        // some sized that normally used
        { width: 200, height: 200 },
        { width: 150, height: 150 },
        { width: 500, height: 500 },
    ];
    const findSize = cached_sized.find((size) => {
        return size.height == Number(height) && size.width == Number(width);
    });
    if (findSize) {
        return res.sendFile(path_1.default.resolve('assets/cachedImg/' + fname + width + 'x' + height + '.jpg'));
    }
    next();
};
