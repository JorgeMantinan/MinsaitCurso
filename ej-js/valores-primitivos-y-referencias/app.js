//Valores primitivos string,number,boolean

let a = 'A';
let b = a;
b += '!';

console.log(a, b); //A, A!

//Valores por referencia array,objetos,funciones
let colores = ['blue','red'];
let colores2 = colores;
colores2.push('orange');
let colores3 = [... colores, 'orange']; //si no estuviera colores2 console.log(colores, colores3); ['blue','red'], ['blue','red','orange'] (MAS EFICIENTE)
let colores4 = colores.slice(0); //crearia un objeto nuevo apartir del elemento 0 del array, luego le añadimos push para añadir el elemento.(ineficiente)
colores4.push('gold');

console.log(colores,colores2); // ['blue','red','orange'],['blue','red','orange']