"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler2Middleware = void 0;
const errorHandler2Middleware = (err, req, res, next) => {
    res.status(err.status).json({
        message: err.message,
    });
};
exports.errorHandler2Middleware = errorHandler2Middleware;
