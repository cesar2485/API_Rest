const express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.send('Primera pagina Web por API Rest');
});

app.listen(10000);