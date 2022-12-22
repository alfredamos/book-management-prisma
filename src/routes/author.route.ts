import express from "express";

import {
    createAuthor,
    deleteAuthor,
    editAuthor,
    getAllAuthors,
    getAuthorById
} from "../controllers/author.controller"

import { authorValidationMiddleware } from "../middleware/author-validation.middleware";



const router = express.Router();

router.route('/')
    .get(getAllAuthors)
    .post(authorValidationMiddleware, createAuthor);

router.route('/:id')
    .delete(deleteAuthor)
    .get(getAuthorById)
    .patch(authorValidationMiddleware, editAuthor);

export default router;