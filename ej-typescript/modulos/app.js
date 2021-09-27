"use strict";
exports.__esModule = true;
var validaciones_1 = require("./validaciones");
var Validaciones = require("./validaciones");
var mascota_1 = require("./mascota");
// con el as Validaciones metemos todas en un objeto para luego usarlo.
Validaciones.esUnNumero('123');
console.log(Validaciones.esUnNumero('123'));
function esTodoMayusculas() {
}
console.log((0, validaciones_1.esUnNumero)('abc'));
console.log((0, validaciones_1.esTodoMayusculas)('ABC'));
var felix = new mascota_1["default"]('Felix');
console.log(felix.tipo);
