const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Configuración para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Importa las rutas
const routes = require('./routes/dragonBallRoutes.js');

// Configuración de vistas y motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 3000);

// Middleware para registrar solicitudes entrantes
app.use((req, res, next) => {
	console.log(`${req.url} - ${req.method}`);
	next();
});

// Middleware para manejar solicitudes JSON y codificación de URL
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Utiliza las rutas en tu aplicación Express
app.use('/', routes); // Monta las rutas definidas en ./routes/dragonBallRoutes.js en la raíz del servidor

// Iniciar el servidor
app.listen(app.get('port'), () => console.log(`Server running on port ${app.get('port')}`));
