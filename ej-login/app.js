//Creacion de una aplicacion de express
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const fs = require('fs').promises

const usuariosRegistrados = [
    { id: 1, username: 'falco', password: '1234', rol: 'ADMIN', nombreCompleto: 'Charles Falco' },
    { id: 2, username: 'blake', password: '1234', rol: 'PREMIUM', nombreCompleto: 'Octavia Blake' }
]

const app = express();

const getSecret = () => {
    return fs.readFile('./secret.txt')
        .then(data => data.toString())
}

//
//npm i cors
app.use(cors({
    origin: ['http://localhost:4200']
}));

app.use(express.json()) //Para que detecte los datos que le lleguen en json y parsearlos a javascript para meterlo dentro del body

app.get('/', (req, res, next) => {
    console.log(req.url, req.method);
    res.json({ ok: true })
})

// Para no montar una base de datos. De esta forma se generan aqui. En cuanto se refresque lo perdemos.
app.post('/register', (req, res, next) => {
    const { usuario, nombre, apellidos, password } = req.body;
    const pos = usuariosRegistrados[usuariosRegistrados.length - 1].id + 1;
    usuariosRegistrados.push(usuarioAGuardar)

    const usuarioAGuardar = {
        id: pos,
        nombreCompleto: `${nombre} ${apellidos}`,
        rol: 'FREE',
        username: usuario,
        password: password
    }
    usuariosRegistrados.push(usuarioAGuardar);
    const user = {usuarioAGuardar};
    delete user.password;
    return res.status(201).json(user);
})

app.post('/login', (req, res, next) => {
    console.log(req.body);
    const { usuario, password } = req.body;
    const usuariosRegistrado = usuariosRegistrados.find(u => {
        return u.username === usuario && u.password === password;
    });

    if (!usuariosRegistrado) {
        return res.status(403).json({ msg: 'Usuario y/o contraseña no es valido' });
    }



    getSecret()
        .then(palabraSecreta => {
            const token = jwt.sign({
                rol: usuariosRegistrado.rol,
                nombreCompleto: usuariosRegistrado.nombreCompleto,
                username: usuariosRegistrado.username
            }, palabraSecreta);

            return res.status(200).json({ token: token })
        })

    // fs.readFile('./secret.txt')
    //     .then(data => {
    //         const palabraSecreta = data.toString()

    //         const token = jwt.sign({
    //             rol: usuariosRegistrado.rol,
    //             nombreCompleto: usuariosRegistrado.nombreCompleto,
    //             username: usuariosRegistrado.username
    //         }, palabraSecreta);

    //         return res.status(200).json({ token: token })
    //     })
})


app.use((req, res, next) => {
    //devuelve el token y la clave secreta jwt.verify
    const auth = req.headers.authorization;
    if (!auth) {
        return res.status(400).json({ msg: 'Necesita la cabecera Authorization' })
    }
    const [bearer, jwtStr] = auth.split(' ')


    getSecret()
        .then(secret => {
            try {
                const payload = jwt.verify(jwtStr, secret);
                next();
            } catch (err) {
                return res.status(401).json({ err: 'Token invalido' })
            }
        })

})

app.get('/datos', (req, res, next) => {
    return res.status(200).json({ msg: 'datos' });
})

// app.post('/datos', (req, res, next) => {

// })




app.listen(3005, () => {
    console.log('Listening on http://localhost:3005');
})