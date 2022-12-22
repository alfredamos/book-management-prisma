import { Request, Response } from "express";
declare const createAuthor: (req: Request, res: Response) => Promise<void>;
declare const deleteAuthor: (req: Request, res: Response) => Promise<void>;
declare const editAuthor: (req: Request, res: Response) => Promise<void>;
declare const getAllAuthors: (req: Request, res: Response) => Promise<void>;
declare const getAuthorById: (req: Request, res: Response) => Promise<void>;
export { createAuthor, deleteAuthor, editAuthor, getAllAuthors, getAuthorById };
