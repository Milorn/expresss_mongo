const mongoose = require("mongoose");

const Book = mongoose.model("Book", {
  title: String,
  description: String,
  grade: Number,
  year: Number,
  readers: Number,
  country: String
});

module.exports = Book;