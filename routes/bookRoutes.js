import express from "express";
const bookRoutes = express.Router();

import bookController from "../controllers/bookController.js";
import Auth from "../middleware/Auth.js";

bookRoutes.get("/books", Auth.Authorization,bookController.getAllBook);

bookRoutes.post("/books", Auth.Authorization, bookController.createBook);

bookRoutes.delete("/books/:id", Auth.Authorization, bookController.deleteBook);

bookRoutes.put("/books/:id", Auth.Authorization, bookController.updateBook);

bookRoutes.get("/books/:id", Auth.Authorization, bookController.getOneBook);

export default bookRoutes;