const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
const postRoute = require('./routes/post');
app.use('/', postRoute);

mongoose.connect('mongodb+srv://cesar:27052007@cluster.rac3u.mongodb.net/?retryWrites=true&w=majority',
{useNewUrlParser: true}, () => {
   console.log('Si hay conexion a la BD');
});
app.listen(10000);