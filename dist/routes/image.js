"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.images = void 0;
const express_1 = __importDefault(require("express"));
const imageResizer_1 = __importDefault(require("../utilities/imageResizer"));
const cachedSized_1 = __importDefault(require("../MiddleWares/cachedSized"));
const images = express_1.default.Router();
exports.images = images;
images.get('/', cachedSized_1.default, (req, res) => {
    return (0, imageResizer_1.default)(req, res);
});
