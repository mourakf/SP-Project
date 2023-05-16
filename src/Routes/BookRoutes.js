import express from "express";
import BookController from "../Controller/BookController.js";

const router = express.Router();

router
  .get("/books", BookController.getAllBooks)
  .get("/books/genre", BookController.getBookByGenre)
  .get("/books/author", BookController.getBookByAuthor)
  .get("/books/:id", BookController.getBookById)
  .get("books/title", BookController.getBookByTitle)
  .post("/books", BookController.registerBook)
  .delete("/books/:id", BookController.deleteBookById);

export default router;
