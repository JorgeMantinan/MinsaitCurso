module.exports = (req,res,next) => {
    const token = '1234';
    if (req.headers['authorization'] === token) {
        next(); //Se ejecuta el siguiente middleware que haya en el package.json
        return;
    }
    res.status(401).json({err: 'Invalid token'});
}