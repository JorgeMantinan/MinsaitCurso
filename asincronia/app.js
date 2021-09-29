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

const fs = require('fs').promises;

fs.readFile('texto1.txt')
    .then(contenido => {
        console.log(contenido.toString());
        return fs.readFile('texto2.txt');
    })
    .then(contenido => {
        console.log(contenido.toString());
        return fs.readFile('texto3.txt');
    })
    .then(contenido => {
        console.log(contenido.toString());
    })


    // ASYNC/AWAIT

    async function a() {
        // await hace que espere ha que haya finalizado el primero
        // solo funciona en una funcion async
        const contenido1 = await fs.readFile('texto1.txt');
        console.log(contenido1.toString());
        const contenido2 = await fs.readFile('texto2.txt');
        console.log(contenido2.toString());
        const contenido3 = await fs.readFile('texto3.txt');
        console.log(contenido3.toString());
    }
    a();