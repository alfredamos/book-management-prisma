"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerMiddleware = void 0;
const errorHandlerMiddleware = (error, req, res, next) => {
    res.status(error.status).json({
        message: error.message,
    });
};
exports.errorHandlerMiddleware = errorHandlerMiddleware;
