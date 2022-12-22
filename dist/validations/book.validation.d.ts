import Joi from "joi";
import { Book } from "../models/book.model";
export declare const bookValidation: (book: Book) => Joi.ValidationResult<any>;
