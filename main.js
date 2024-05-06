/**
 * - Créer le fichier .gitignore qui contient node_modules
 * - Créer un répértoire sur github et push le projet express
 */

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Ok');
});

app.listen(3000, () => {
    console.log("Server started at: http://localhost:3000");
});