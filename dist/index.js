"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const image_1 = require("./routes/image");
const app = (0, express_1.default)();
app.use('/api/images', image_1.images);
app.get('/api', (req, res) => {
    res.send('welcom to Image resizer project');
});
app.listen(3000, () => {
    console.log('listening on port 3000!');
});
exports.default = app;
