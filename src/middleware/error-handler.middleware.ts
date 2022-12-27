import { Request, Response, NextFunction } from 'express';
import { HttpError } from "http-errors";
import {StatusCodes} from "http-status-codes";

export const errorHandlerMiddleware = (error: HttpError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    const message = error.message || 'Something went wrong';        
    
    return res.status(statusCode).json({
        message
    });
   
}