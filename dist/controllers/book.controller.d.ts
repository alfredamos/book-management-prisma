import { Request, Response } from "express";
declare const createBook: (req: Request, res: Response) => Promise<void>;
declare const deleteBook: (req: Request, res: Response) => Promise<void>;
declare const editBook: (req: Request, res: Response) => Promise<void>;
declare const getAllBooks: (req: Request, res: Response) => Promise<void>;
declare const getBookById: (req: Request, res: Response) => Promise<void>;
export { createBook, deleteBook, editBook, getAllBooks, getBookById };
