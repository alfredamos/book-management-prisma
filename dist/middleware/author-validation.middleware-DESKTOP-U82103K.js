"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorValidationMiddleware = void 0;
const author_validation_1 = require("../validations/author.validation");
const bad_request_error_1 = require("../errors/bad-request.error");
const authorValidationMiddleware = (req, res, next) => {
    const { body: author } = req;
    const authorVar = author;
    const { error, value } = (0, author_validation_1.authorValidation)(authorVar);
    if (error) {
        let errorMessage = [];
        for (const err of error.details) {
            errorMessage.push(err.message);
        }
        //throw createError(StatusCodes.BAD_REQUEST, `${errorMessage} - please provide all required values`);
        throw new bad_request_error_1.BadRequest(`${errorMessage} - please provide all required values`);
    }
    next();
    return value;
};
exports.authorValidationMiddleware = authorValidationMiddleware;
