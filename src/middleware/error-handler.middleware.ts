import { Request, Response, NextFunction } from 'express';
import { HttpError } from "http-errors";

export const errorHandlerMiddleware = (error: HttpError, req: Request, res: Response, next: NextFunction) => {
    res.status(error.status).json({        
        message: error.message,    
    });
}