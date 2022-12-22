import createError from "http-errors";
import { Book } from '../models/book.model';
import { bookValidation } from '../validations/book.validation';
import {Request, Response, NextFunction} from "express";
import { StatusCodes } from 'http-status-codes';

export const bookValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const {body: book}  = req;
    const bookVar = book as Book;
    const {error, value} = bookValidation(bookVar);

    if (error) {
        let errorMessage: string[] = [];

        for (const err of error.details){
            errorMessage.push(err.message);
        }

        throw createError(StatusCodes.BAD_REQUEST, `${errorMessage} - please provide all required values`);       
    }

    next();

    return value;
}