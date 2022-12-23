import { Request, Response, NextFunction } from 'express';
import { HttpError } from "http-errors";
import {StatusCodes} from "http-status-codes";

export const errorHandlerMiddleware = (error: HttpError, req: Request, res: Response, next: NextFunction) => {
    if (error.status === StatusCodes.NOT_FOUND || error.status === StatusCodes.BAD_REQUEST){
        res.status(error.status).json({        
            message: error.message,    
        });
    }
    
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: error.message
    });
   
}