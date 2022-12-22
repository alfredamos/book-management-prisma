import express from "express";
import {
  createBook,
  deleteBook,
  editBook,
  getAllBooks,
  getBookById,
} from "../controllers/book.controller";

import { bookValidationMiddleware } from "../middleware/book-validation.middleware";

const router = express.Router();

router.route("/").get(getAllBooks).post(bookValidationMiddleware, createBook);

router
  .route("/:id")
  .delete(deleteBook)
  .get(getBookById)
  .patch(bookValidationMiddleware, editBook);

export default router;
