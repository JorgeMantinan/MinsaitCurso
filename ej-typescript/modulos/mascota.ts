class Mascota {
    nombre: string;
    tipo: string;

    //valor por defecto gato
    constructor(nombre: string, tipo: string = 'gato') {
        this.nombre = nombre;
        this.tipo = tipo;
    }
}

const roky = new Mascota('Roky','perro');
const felix = new Mascota('Felix');
console.log(felix.tipo);

// Para solo exportar Mascota de esta clase. Para renombrarlo no haria falta usar el as en el import de donde lo vayas a usar, simplemente hacer import LOQUEQUIERA from ...
export default Mascota; //Tambien puede ir delante de la clase, function etc. Es mejor tener todos los export debajo para apps muy grandes.