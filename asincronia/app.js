//CALLBACK

const fs = require('fs');

// const getContenido = (err, contenido) => {
//     console.log(contenido.toString());
// }

// fs.readFile('texto1.txt', getContenido);
// fs.readFile('texto2.txt', getContenido);
// fs.readFile('texto3.txt', getContenido);

fs.readFile('texto1.txt', (err, contenido) => {
    console.log(contenido.toString());
    fs.readFile('texto2.txt', (err, contenido) => {
        console.log(contenido.toString());
        fs.readFile('texto2.txt', (err, contenido) => {
            console.log(contenido.toString());
        })
    })
})

// PROMISES

