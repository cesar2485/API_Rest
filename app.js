const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bobyParser = require('body-parser');

app.use(bodyParser.json());
const postRoute = require('./routes/post');
app.use('/servicios', postRoute);

app.get('/', (req, res) => {
   res.send('Primera pagina Web por API Rest');
});
mongoose.connect('mongodb+srv://cesar:27052007@cluster.rac3u.mongodb.net/?retryWrites=true&w=majority',
{useNewUrlParser: true}, () => {
   console.log('Si hay conexion a la BD');
});
app.listen(10000);