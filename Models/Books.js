import mongoose from "mongoose";

const publisherSchema = new mongoose.Schema({
  name: String,
  country: String,
  foundedYear: Number,
});

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  publicationYear: Number,
  isbn: String,
  price: Number,
  publisher: publisherSchema,
});

const Book = mongoose.model("Book", bookSchema);

export default Book;