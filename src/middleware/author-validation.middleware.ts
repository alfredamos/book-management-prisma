import catchError from "http-errors";
import { StatusCodes } from "http-status-codes";
import { Author } from '../models/author.model';
import { authorValidation } from '../validations/author.validation';
import {Request, Response, NextFunction} from "express";


export const authorValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const {body: author}  = req;
    const authorVar = author as Author;
    const {error, value} = authorValidation(authorVar);

    if (error) {        
        const errorMessage = Object.values(error.details).join('. ');

        throw catchError(StatusCodes.BAD_REQUEST, `${errorMessage} - please provide all required values`);
        
    }

    next();

    return value;
}