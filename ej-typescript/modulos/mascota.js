"use strict";
exports.__esModule = true;
var Mascota = /** @class */ (function () {
    //valor por defecto gato
    function Mascota(nombre, tipo) {
        if (tipo === void 0) { tipo = 'gato'; }
        this.nombre = nombre;
        this.tipo = tipo;
    }
    return Mascota;
}());
var roky = new Mascota('Roky', 'perro');
var felix = new Mascota('Felix');
console.log(felix.tipo);
// Para solo exportar Mascota de esta clase. Para renombrarlo no haria falta usar el as en el import de donde lo vayas a usar, simplemente hacer import LOQUEQUIERA from ...
exports["default"] = Mascota; //Tambien puede ir delante de la clase, function etc. Es mejor tener todos los export debajo para apps muy grandes.
