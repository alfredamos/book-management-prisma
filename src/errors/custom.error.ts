import {StatusCodes} from "http-status-codes";

export class CustomError extends Error {
    statusCode
    constructor(message: string){
        super(message);
        this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;        
    }
}