const express = require('express');
const {MongoClient} = require('mongodb');

const app = express();
app.set('view engine', 'ejs');

const connection = new MongoClient('mongodb://127.0.0.1:27017');
connection.connect();

app.get('/books', async(req, res) => {
   const data = await connection.db('booky').collection('books').find().toArray();
    res.render('books', {
        books: data
    });
});

app.get('/books/:title', async(req, res) => {
    const title = req.params.title;
    const data = await connection.db('booky').collection('books').findOne({title: title});
    
    if(data) {
        res.render('book', {
            book: data
        });
    } else {
        res.status(404).send('Not found');
    }
 });

/**
 * - Ajouter la route /:title
 * - Récupérer le livre qui a le titre dans l'url
 * - Le retourner dans un fichier ejs
 */

app.listen(3000, () => {
    console.log("Server started at: http://localhost:3000");
});