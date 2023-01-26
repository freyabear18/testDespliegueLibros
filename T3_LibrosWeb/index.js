//main

const express = require('express');
const mongoose = require('mongoose');
const nunjucks = require('nunjucks');

const libros = require(__dirname + '/routes/libros');
const autores = require(__dirname + '/routes/autores'); // Para la parte opcional

mongoose.connect('mongodb://127.0.0.1:27017/libros', {
   // newUrlParser: true
});

let app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.set('view engine', 'njk');

app.use(express.json());
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

app.use('/libros', libros);
app.use('/autores', autores);

app.listen(8080);