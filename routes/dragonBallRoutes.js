const express = require('express');
const router = express.Router();
const dragonBallController = require('../controllers/dragonBallController');

// Ruta para la raíz de la aplicación
router.get('/', (req, res) => {
    res.render('index', { title: 'Dragon Ball API' }); // Ajusta el título según tus necesidades
});

// Ruta para la página de planet
router.get('/planet', (req, res) => {
    res.render('planet', { title: 'Planet' }); // Ajusta el título según tus necesidades
});

router.get('/character', (req, res) => {
    res.render('character', { title: 'Character' }); // Ajusta el título según tus necesidades
});

// Ruta para buscar personajes de Dragon Ball por nombre
router.get('/dragonball/character', dragonBallController.getCharacterByName);

// Ruta para buscar planetas de Dragon Ball por nombre
router.get('/dragonball/planet', dragonBallController.getPlanetByName);

// Ruta por defecto para todas las demás solicitudes
router.use((req, res) => {
    res.redirect('/'); // Redirige al usuario a la ruta raíz
});

module.exports = router;
