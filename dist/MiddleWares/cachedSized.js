"use strict";
//check if image stored in cachedImg file to send it to the user with out calling resizer function
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = __importDefault(require("fs"));
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const fname = req.query.fname;
    const width = req.query.width;
    const height = req.query.height;
    if (fs_1.default.existsSync(path_1.default.resolve('assets/thumb/' + fname + '_thumb.jpg'))) {
        const metadata = yield (0, sharp_1.default)(path_1.default.resolve('assets/thumb/' + fname + '_thumb.jpg')).metadata();
        if (metadata.height == Number(height) &&
            metadata.width == Number(width)) {
            return res.sendFile(path_1.default.resolve('assets/thumb/' + fname + '_thumb.jpg'));
        }
        return next();
    }
    return next();
});
