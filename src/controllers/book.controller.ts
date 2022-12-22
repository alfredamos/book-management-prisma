import createError from "http-errors";
import asyncErrorHandler from "express-async-handler";
import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { Book } from "../models/book.model";

const prisma = new PrismaClient();

const createBook = asyncErrorHandler(async (req: Request, res: Response) => {
  const { body: newBook } = req;

  const newBookVar = newBook as Book;

  const dateOfPublication = newBookVar.dateOfPublication;

  if (typeof dateOfPublication === "string") {
    newBookVar.dateOfPublication = new Date(dateOfPublication);
  }

  const book = await prisma.book.create({
    data: { ...newBookVar },
  });

  res.status(StatusCodes.CREATED).json(book);
});


const deleteBook = asyncErrorHandler(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const book = await prisma.book.findUnique({
    where: { id },
  });

  if (!book) {
    throw createError(StatusCodes.NOT_FOUND, `Book with id ${id} is not found.`);      
  }

  const deletedBook = await prisma.book.delete({
    where: { id },
  });

  res.status(StatusCodes.OK).json(deletedBook);
});


const editBook = asyncErrorHandler(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { body: bookToUpdate } = req;

  const bookToUpdateVar = bookToUpdate as Book;

  const dateOfPublication = bookToUpdateVar.dateOfPublication;

  if (typeof dateOfPublication === "string") {
    bookToUpdateVar.dateOfPublication = new Date(dateOfPublication);
  }

  const book = await prisma.book.findUnique({
    where: { id },
  });

  if (!book) {
    throw createError(StatusCodes.NOT_FOUND, `Book with id ${id} is not found.`);      
  }

  const updatedBook = await prisma.book.update({
    where: { id },
    data: { ...bookToUpdateVar },
  });

  res.status(StatusCodes.OK).json(updatedBook);
});


const getAllBooks = asyncErrorHandler(async (req: Request, res: Response) => {
  const books = await prisma.book.findMany({
    include: {
      author: true,
    },
  });

  res.status(StatusCodes.OK).json(books);
});


const getBookById = asyncErrorHandler(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const book = await prisma.book.findUnique({
    where: { id },
    include: {
      author: true,
    },
  });

  if (!book) {
    throw createError(StatusCodes.NOT_FOUND, `Book with id ${id} is not found.`);      
  }

  res.status(StatusCodes.OK).json(book);
});

export { createBook, deleteBook, editBook, getAllBooks, getBookById };