const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));


//se envia la ruta de las vistas parciales
hbs.registerPartials(__dirname + '/views/parciales');


// Express HBS engine
app.set('view engine', 'hbs');//seteo motor de renderizado


//rutas

//get enviando nombre como json
app.get('/', function(req, res) {
    res.render('home', {
        nombre: "pAul AlZ"
    });
});

//get. renderizando vista about
app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});