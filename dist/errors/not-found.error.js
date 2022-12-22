"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFound = void 0;
const http_status_codes_1 = require("http-status-codes");
const custom_error_1 = require("./custom.error");
class NotFound extends custom_error_1.CustomError {
    constructor(message) {
        super(message);
        this.statusCode = http_status_codes_1.StatusCodes.NOT_FOUND;
    }
}
exports.NotFound = NotFound;
