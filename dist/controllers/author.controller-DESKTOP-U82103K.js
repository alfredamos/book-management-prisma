"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthorById = exports.getAllAuthors = exports.editAuthor = exports.deleteAuthor = exports.createAuthor = void 0;
//import createError from "http-errors";
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const client_1 = require("@prisma/client");
const http_status_codes_1 = require("http-status-codes");
const not_found_error_1 = require("../errors/not-found.error");
const prisma = new client_1.PrismaClient();
const createAuthor = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body: newAuthor } = req;
    const newAuthorVar = newAuthor;
    const author = yield prisma.author.create({
        data: Object.assign({}, newAuthorVar),
    });
    res.status(http_status_codes_1.StatusCodes.CREATED).json(author);
}));
exports.createAuthor = createAuthor;
const deleteAuthor = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const author = yield prisma.author.findUnique({
        where: { id },
    });
    if (!author) {
        /* throw createError(
          StatusCodes.NOT_FOUND,
          `Author with id ${id} is not found.`
        ); */
        throw new not_found_error_1.NotFound(`Author with id = ${id} is not found.`);
    }
    const deletedAuthor = yield prisma.author.delete({
        where: { id },
    });
    res.status(http_status_codes_1.StatusCodes.OK).json(deletedAuthor);
}));
exports.deleteAuthor = deleteAuthor;
const editAuthor = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body: authorToUpdate } = req;
    const authorToUpdateVar = authorToUpdate;
    const author = yield prisma.author.findUnique({
        where: { id },
    });
    if (!author) {
        /* throw createError(
          StatusCodes.NOT_FOUND,
          `Author with id ${id} is not found.`
        ); */
        throw new not_found_error_1.NotFound(`Author with id = ${id} is not found.`);
    }
    const updatedAuthor = yield prisma.author.update({
        where: { id },
        data: Object.assign({}, authorToUpdateVar),
    });
    res.status(http_status_codes_1.StatusCodes.OK).json(updatedAuthor);
}));
exports.editAuthor = editAuthor;
const getAllAuthors = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authors = yield prisma.author.findMany({
        include: {
            books: true,
        },
    });
    res.status(http_status_codes_1.StatusCodes.OK).json(authors);
}));
exports.getAllAuthors = getAllAuthors;
const getAuthorById = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const author = yield prisma.author.findUnique({
        where: { id },
        include: {
            books: true,
        },
    });
    if (!author) {
        //throw createError(StatusCodes.NOT_FOUND, `Author with id ${id} is not found.`);      
        throw new not_found_error_1.NotFound(`Author with id = ${id} is not found.`);
    }
    res.status(http_status_codes_1.StatusCodes.OK).json(author);
}));
exports.getAuthorById = getAuthorById;
