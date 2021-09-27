import { esUnNumero, esTodoMayusculas as esMayus } from './validaciones'
import * as Validaciones from './validaciones';
import Mascota from './mascota';

// con el as Validaciones metemos todas en un objeto para luego usarlo.
Validaciones.esUnNumero('123');
console.log(Validaciones.esUnNumero('123'));

function esTodoMayusculas() {

}

console.log(esUnNumero('abc'));
console.log(esMayus('ABC'));

const felix = new Mascota('Felix');
console.log(felix.tipo);