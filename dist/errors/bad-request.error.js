"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequest = void 0;
const custom_error_1 = require("./custom.error");
const http_status_codes_1 = require("http-status-codes");
class BadRequest extends custom_error_1.CustomError {
    constructor(message) {
        super(message);
        this.statusCode = http_status_codes_1.StatusCodes.BAD_REQUEST;
    }
}
exports.BadRequest = BadRequest;
