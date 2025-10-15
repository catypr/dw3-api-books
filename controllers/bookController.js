import bookService from "../services/bookService.js";
import jwt from "jsonwebtoken";
import {ObjectId} from "mongodb"

// const JWTsecret = apithebooks;

const getAllBook = async (req, res) => {
  try {
    const books = await bookService.getAll();
    res.status(200).json({ books: books });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, genre, publicationYear, isbn, price, publisher } =
      req.body;
    await bookService.Create(
      title,
      author,
      genre,
      publicationYear,
      isbn,
      price,
      publisher
    );
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

const deleteBook = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      await bookService.Delete(id);
      res.sendStatus(204);
    } else {
      res.status(400).json({ error: "A ID enviada é inválida." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

const updateBook = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const { title, author, genre, publicationYear, isbn, price, publisher } =
        req.body;
      const book = await bookService.Update(
        id,
        title,
        author,
        genre,
        publicationYear,
        isbn,
        price,
        publisher
      );
      res.status(200).json({ book });
    } else {
      res.status(400).json ({ error: "A ID enviada é inválida." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor. " });
  }
};

const getOneBook = async (req, res) => {
  try {
    const id = req.params.id;

    if (ObjectId.isValid(id)) {
      const book = await bookService.getOne(id);

      if (!book) {
        res.status(404).json({ error: "O livro não foi encontrado." });
      } else {
        res.status(200).json({ book });
      }
    } else {
      res.status(400).json({ error: "A ID enviada é inválida." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

export default { getAllBook, createBook, deleteBook, updateBook, getOneBook };