"use strict";
exports.__esModule = true;
exports.esTodoMayusculas = exports.esUnNumero = void 0;
function esUnNumero(texto) {
    var regExp = new RegExp("\\d+", 'g'); //g para comprobar que todos los caracteres coinciden con que es la expresion regular (d es digitos)
    return regExp.test(texto);
}
exports.esUnNumero = esUnNumero;
function esTodoMayusculas(texto) {
    return texto === texto.toUpperCase();
}
exports.esTodoMayusculas = esTodoMayusculas;
var A = true;
