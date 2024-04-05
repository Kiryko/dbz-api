// const characterValidation = require('../validations/index')
const axios = require('axios');

const searchCharacter = async (req, res, next) => {
    try {
        const characterName = req.body.characterName; // Obtener el nombre del personaje del formulario
        res.redirect(`/dragonball/character?name=${characterName}`); // Redirigir a la ruta para buscar por nombre
    } catch (error) {
        console.error('Error searching Dragon Ball character:', error);
        res.status(500).send('Error searching Dragon Ball character');
    }
};

const getCharacterByName = async (req, res, next) => {
    try {
        const characterName = req.query.name; // Obtener el nombre del personaje de la consulta
        // characterValidation.validateName(characterName);
        const response = await axios.get(`https://dragonball-api.com/api/characters?name=${characterName}`);
       
        const character = response.data[0]; // Extraer el primer personaje de la respuesta, asumiendo que solo se devuelve uno
        console.log(character.name);

        res.render('OneSingleCharacterInfo', {
            title: `Dragon Ball -> ${characterName}`,
            // character: character[0]
            name: character.name,
            race: character.race,
            ki: character.ki,
            maxKi: character.maxKi,
            gender: character.gender,
            description: character.description,
            image: character.image,
            affiliation: character.affiliation
        });
    } catch (error) {
        console.error('Error fetching Dragon Ball data:', error);
        res.status(500).send('Error fetching Dragon Ball data');
    }
};


const getPlanetByName = async (req, res, next) => {
    try {
        const planetName = req.query.name; // Obtener el nombre del personaje de la consulta
        const response = await axios.get(`https://dragonball-api.com/api/planets/?name=${planetName}`);
        const planet = response.data[0]; // Extraer el primer personaje de la respuesta, asumiendo que solo se devuelve uno
        console.log(planet);

        res.render('OneSinglePlanetInfo', {
            title: `Dragon Ball Planet-> ${planetName}`,
            // character: character[0]
            name: planet.name,
            isDestroyed: planet.isDestroyed
        });
    } catch (error) {
        console.error('Error fetching Dragon Ball data:', error);
        // res.status(500).send('Error fetching Dragon Ball data');
        res.render('error', {
            title: 'test'
        });
    }
};




module.exports = {
    searchCharacter,
    getCharacterByName,
    getPlanetByName
};
