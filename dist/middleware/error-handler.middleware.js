"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerMiddleware = void 0;
//import { HttpError } from "http-errors";
const http_status_codes_1 = require("http-status-codes");
const custom_error_1 = require("../errors/custom.error");
const errorHandlerMiddleware = (error, req, res, next) => {
    if (error instanceof custom_error_1.CustomError) {
        return res.status(error.statusCode).json({
            message: error.message,
        });
    }
    const statusCode = http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
    const message = 'Something went wrong';
    return res.status(statusCode).json({
        message
    });
};
exports.errorHandlerMiddleware = errorHandlerMiddleware;
