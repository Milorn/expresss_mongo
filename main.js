const express = require("express");

const mongoose = require("mongoose");
const Book = require("./models/Book");

mongoose.connect("mongodb://127.0.0.1:27017/booky");

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));

app.get("/books", async (req, res) => {
  const data = await Book.find();
  res.render("books", {
    books: data,
  });
});

app.get("/books/create", (req, res) => {
  res.render("create");
});

app.get("/books/:title", async (req, res) => {
  const data = await Book.findOne({ title: req.params.title });

  if (data) {
    res.render("book", {
      book: data,
    });
  } else {
    res.status(404).send("Not found");
  }
});

app.post("/books", async(req, res) => {
    const book = new Book({
      title: req.body.title,
      description: req.body.description,
      grade: req.body.grade,
      year: req.body.year,
      readers: req.body.readers,
      country: req.body.country,
    });
    await book.save();
    res.redirect('/books');
});

/**
 * - Route: GET /products/create qui renvoit un fichier ejs
 * qui contient un formulaire pour ajouter un nouveau livre
 * - Route: POST /products qui reçoit les données du formulaire
 */

app.listen(3000, () => {
  console.log("Server started at: http://localhost:3000");
});
