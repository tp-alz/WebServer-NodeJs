const hbs = require('hbs');

// Helpers

//helper hbs que entrega el año
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

//hlper hbs que devuelve uns string normalizado
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() +
            palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});