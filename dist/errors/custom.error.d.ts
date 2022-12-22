import { StatusCodes } from "http-status-codes";
export declare class CustomError extends Error {
    statusCode: StatusCodes;
    constructor(message: string);
}
