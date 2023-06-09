var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import errorsCategory from "../errors/index.js";
import bookRepositories from "../repositories/bookRepositories.js";
function create(_a) {
    var name = _a.name, author = _a.author, userId = _a.userId;
    return __awaiter(this, void 0, void 0, function () {
        var rowCount;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, bookRepositories.findByName({ name: name })];
                case 1:
                    rowCount = (_b.sent()).rowCount;
                    if (rowCount)
                        throw errorsCategory.conflictError("Book already exists");
                    return [4 /*yield*/, bookRepositories.create({ name: name, author: author, userId: userId })];
                case 2:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function findAll() {
    return __awaiter(this, void 0, void 0, function () {
        var books;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, bookRepositories.findAll()];
                case 1:
                    books = _a.sent();
                    if (!books.rowCount)
                        throw errorsCategory.notFoundError();
                    return [2 /*return*/, books.rows];
            }
        });
    });
}
function takeBook(_a) {
    var userId = _a.userId, bookId = _a.bookId;
    return __awaiter(this, void 0, void 0, function () {
        var book;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, bookRepositories.findById({ bookId: bookId })];
                case 1:
                    book = (_b.sent()).rows[0];
                    if (!book)
                        throw errorsCategory.notFoundError();
                    if (!book.available)
                        throw errorsCategory.conflictError("Book not available");
                    return [4 /*yield*/, bookRepositories.updateStatusBook({ status: true, bookId: bookId })];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, bookRepositories.takeBook({ userId: userId, bookId: bookId })];
                case 3:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function findAllMyBooks(_a) {
    var userId = _a.userId;
    return __awaiter(this, void 0, void 0, function () {
        var books;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, bookRepositories.findAllMyBooks({ userId: userId })];
                case 1:
                    books = _b.sent();
                    return [2 /*return*/, books.rows];
            }
        });
    });
}
export default {
    create: create,
    findAll: findAll,
    takeBook: takeBook,
    findAllMyBooks: findAllMyBooks,
};
