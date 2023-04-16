import express from "express";
import BookController from "../Controller/BookController.js"

const router = express.Router()

router
    .get('/books', BookController.getAllBooks)
    .get('/books/genre', BookController.getBookByGenre)
    .get('/books/author', BookController.getBookByGenre)
    .get('/books/:id', BookController.getBookById)
    .post('/books', BookController.registerBook)

export default router