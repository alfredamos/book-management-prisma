import createError from "http-errors";
import asyncErrorHandler from "express-async-handler";
import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { Author } from "../models/author.model";

const prisma = new PrismaClient();

const createAuthor = asyncErrorHandler(async (req: Request, res: Response) => {
  const { body: newAuthor } = req;

  const newAuthorVar = newAuthor as Author;

  const author = await prisma.author.create({
    data: { ...newAuthorVar },
  });

  res.status(StatusCodes.CREATED).json(author);
});

const deleteAuthor = asyncErrorHandler(async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  const author = await prisma.author.findUnique({
    where: { id },
  });

  if (!author) {
    throw createError(
      StatusCodes.NOT_FOUND,
      `Author with id ${id} is not found.`
    );
  }

  const deletedAuthor = await prisma.author.delete({
    where: { id },
  });

  res.status(StatusCodes.OK).json(deletedAuthor);
});

const editAuthor = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { body: authorToUpdate } = req;

    const authorToUpdateVar = authorToUpdate as Author;

    const author = await prisma.author.findUnique({
      where: { id },
    });

    if (!author) {      
      throw createError(
        StatusCodes.NOT_FOUND,
        `Author with id ${id} is not found.`
      );
    }

    const updatedAuthor = await prisma.author.update({
      where: { id },
      data: { ...authorToUpdateVar },
    });

    res.status(StatusCodes.OK).json(updatedAuthor);
  }
);

const getAllAuthors = asyncErrorHandler(async (req: Request, res: Response) => {
  const authors = await prisma.author.findMany({
    include: {
      books: true,
    },
  });

  res.status(StatusCodes.OK).json(authors);
});

const getAuthorById = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const author = await prisma.author.findUnique({
      where: { id },
      include: {
        books: true,
      },
    });

    if (!author) {
      throw createError(StatusCodes.NOT_FOUND, `Author with id ${id} is not found.`);      
    }

    res.status(StatusCodes.OK).json(author);
  }
);

export { createAuthor, deleteAuthor, editAuthor, getAllAuthors, getAuthorById };
