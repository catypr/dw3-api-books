import express from "express";
const app = express ();
// import mongoose, { mongo } from "mongoose";
import mongoose from "./config/db-connection.js"

import Book from "./models/Books.js";
import Users from "./Models/Users.js"
import userRoutes from "./routes/userRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";


//mongoose.connect("mongodb://127.0.0.1:27017/api-thebooks")

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use("/", bookRoutes)
app.use("/", userRoutes);

const port = 4000
app.listen(port, (error) => {
    if (error) {
        console.log(error)
    }
    console.log(`API rodando em http://localhost:${port}.`);
})