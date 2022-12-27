"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerMiddleware = void 0;
const http_status_codes_1 = require("http-status-codes");
const errorHandlerMiddleware = (error, req, res, next) => {
    if (error.status === http_status_codes_1.StatusCodes.NOT_FOUND || error.status === http_status_codes_1.StatusCodes.BAD_REQUEST) {
        res.status(error.status).json({
            message: error.message,
        });
    }
    return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: error.message
    });
};
exports.errorHandlerMiddleware = errorHandlerMiddleware;
