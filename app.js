const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.get('/', (req, res) => {
   res.send('Primera pagina Web por API Rest');
});
mongoose.connect('mongodb+srv://cesar:27052007@cluster.rac3u.mongodb.net/?retryWrites=true&w=majority',
{useNewUrlParser: true}, () => {
   console.log('Si hay conexion a la BD');
});
app.listen(10000);