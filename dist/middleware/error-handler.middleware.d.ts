import { Request, Response, ErrorRequestHandler } from "express";
export declare const errorHandlerMiddleware: (err: ErrorRequestHandler, req: Request, res: Response) => Response<any, Record<string, any>>;
