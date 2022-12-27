"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookValidationMiddleware = void 0;
const book_validation_1 = require("../validations/book.validation");
const bad_request_error_1 = require("../errors/bad-request.error");
const bookValidationMiddleware = (req, res, next) => {
    const { body: book } = req;
    const bookVar = book;
    const { error, value } = (0, book_validation_1.bookValidation)(bookVar);
    if (error) {
        let errorMessage = [];
        for (const err of error.details) {
            errorMessage.push(err.message);
        }
        throw new bad_request_error_1.BadRequest(`${errorMessage.join('. ')} - please provide all required values`);
        //throw createError(StatusCodes.BAD_REQUEST, `${errorMessage} - please provide all required values`);       
    }
    next();
    return value;
};
exports.bookValidationMiddleware = bookValidationMiddleware;
