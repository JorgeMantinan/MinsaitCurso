//Si se ejecuta en node es vacio y si se ejecuta en navegador es un objeto
// console.log(this);

//Al estar usandose fuera de la función flecha, no se está usando fuera el this y es undefined undefined
const persona = {
    nombre: 'Angel',
    apellido: 'Villalba',
    getNombreCompleto: () => {
        console.log(this); // Objeto que se encuentra en el ambito superior a la funcion
        return `${this.nombre} ${this.apellido}`;
    },
    //Este Si Mostraría
    getNombreCompleto2: function() {
        console.log(this); //Objeto que llama a la funcion
        return `${this.nombre} ${this.apellido}`;
    },
    getNombreCompleto3: function() {
        this.fecha = new Date();
        // const muestraFecha = function() {
        //     console.log('Fecha: ', this.fecha)
        // }.bind(this) //Si le ponemos este bind, se solucionaría el undefined de abajo
        //En este caso sería undefined porque esta declarada fuera pero es una funcion NO de flecha

        // let that = this;
        // const muestraFecha = function() {
        //     console.log(that)
        //     console.log('Fecha: ', this.fecha)
        // }
        //Esto es otra solucion

        const muestraFecha = () => {
            console.log(this); //Usaria el this de persona cuando ejecutamos la funcion
            console.log('Fecha: ', this.fecha)
        }
        //Esta es la mejor solucion

        muestraFecha(); 
        return `${this.nombre} ${this.apellido} (${this.fecha})`;
    }
}

//Mejor solucion. Aqui estamos diciendole que tiene que utilizar en el bind(Que tiene que utilizar como this dentro de la funcion).
//En getNombreCompleto2 utiliza como this lo que le meta dentro de .bind.
//En getNombreCompleto no funcionaría al ser funcion flecha
persona.getNombreCompleto2 = persona.getNombreCompleto2.bind({nombre: 'Charly', apellido: 'Falco'}); 

console.log(persona.getNombreCompleto());
console.log(persona.getNombreCompleto2());
console.log(persona.getNombreCompleto3());


//Cuando nadie llama a la funcion, lo esta llamando el objeto global (En este caso sería el objeto global del navegador)
function a() {
    console.log(this); //Este es el objeto global
}

//a();