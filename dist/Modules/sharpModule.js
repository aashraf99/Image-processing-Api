"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
exports.default = (fname, height, width) => {
    return (0, sharp_1.default)(path_1.default.resolve('assets/full/' + fname + '.jpg'))
        .resize({ height: height, width: width })
        .toFile(path_1.default.resolve('assets/thumb/' + fname + '_thumb.jpg'));
};
