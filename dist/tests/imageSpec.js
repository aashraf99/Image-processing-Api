"use strict";
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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const sharpModule_1 = __importDefault(require("../Modules/sharpModule"));
const request = (0, supertest_1.default)(index_1.default);
describe('test image resizer function', () => {
    it('check width and height', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request.get('/api/images?fname=fjord');
        expect(res.text).toBe('height or width not entered');
    }));
    it('check width and height validation', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request.get('/api/images?fname=fjord&width=0&height=-400');
        expect(res.text).toBe('height and width must be more than 0');
    }));
    it('check input file (missing)', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request.get('/api/images');
        expect(res.text).toBe('Error: input file is missing');
    }));
    it('check complete resize and send file successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request.get('/api/images?fname=fjord&width=600&height=400');
        expect(res.files).toBeTrue;
    }));
    it('check sharp module', () => __awaiter(void 0, void 0, void 0, function* () {
        expect((0, sharpModule_1.default)("fjord", 300, 300)).toBeTrue;
    }));
});
