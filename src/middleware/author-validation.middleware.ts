import createError from "http-errors";
import { StatusCodes } from "http-status-codes";
import { Author } from '../models/author.model';
import { authorValidation } from '../validations/author.validation';
import {Request, Response, NextFunction} from "express";
import { BadRequest } from '../errors/bad-request.error';

export const authorValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const {body: author}  = req;
    const authorVar = author as Author;
    const {error, value} = authorValidation(authorVar);

    if (error) {
        let errorMessage: string[] = [];

        for (const err of error.details){
            errorMessage.push(err.message);
        }

        //throw createError(StatusCodes.BAD_REQUEST, `${errorMessage} - please provide all required values`);
        throw new BadRequest(`${errorMessage} - please provide all required values`);
    }

    next();

    return value;
}