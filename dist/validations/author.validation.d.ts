import Joi from "joi";
import { Author } from "../models/author.model";
export declare const authorValidation: (author: Author) => Joi.ValidationResult<any>;
