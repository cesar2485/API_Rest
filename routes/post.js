
const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json(

        [
            {
                "id" : "16944838",
                "nombre" : "Andres",
                "Apellido" : "Castillo",
                "e-mail" : "amaucas@gmail.com",
                "tel" : "3218750729"
            },
            {
                "id" : "123456789",
                "nombre" : "Pepe",
                "Apellido" : "Sanchez",
                "e-mail" : "pepesanchez@gmail.com",
                "tel" : "321123456789"
            }
        ]
        
    );
})

router.get('/HTML', (req, res) => {
    res.send(
        "<h1>Hola mundo</h1>"
    );
});


module.exports = router;