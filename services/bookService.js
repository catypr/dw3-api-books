import Book from "../models/Books.js";

class bookService {
  async getAll() {
    try {
      const books = await Book.find();
      return books;
    } catch (error) {
      console.log(error);
    }
  }

  async Create(title, author, genre, publicationYear, isbn, price, publisher) {
    try {
      const newBook = new Book({
        title,
        author,
        genre,
        publicationYear,
        isbn,
        price,
        publisher,
      });
      await newBook.save();
    } catch (error) {
      console.log(error);
    }
  }

  async getOne(id) {
    try {
      const book = await Book.findOne({ _id: id });
      return book;
    } catch (error) {
      console.log(error);
    }
  }

  async Update(
    id,
    title,
    author,
    genre,
    publicationYear,
    isbn,
    price,
    publisher
  ) {
    try {
      const book = await Book.findByIdAndUpdate(
        id,
        {
          title,
          author,
          genre,
          publicationYear,
          isbn,
          price,
          publisher,
        },
        { new: true }
      );
      console.log(`Dados do livro com o id ${id} alterados com sucesso`);
      return book;
    } catch (error) {
      console.log(error);
    }
  }

  async Delete(id) {
    try {
      await Book.findByIdAndDelete(id);
      console.log(`Livro com a id ${id} deletado com sucesso.`);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new bookService();
