function esUnNumero(texto: string): boolean {
    const regExp = new RegExp("\\d+", 'g'); //g para comprobar que todos los caracteres coinciden con que es la expresion regular (d es digitos)
    return regExp.test(texto);
}

function esTodoMayusculas(texto: string): boolean {
    return texto === texto.toUpperCase();
}

const A = true;

//Para exportar las cosas que se van a utilizar en otros lugares (este ejemplo en app.ts)
//Se le llama EXPORTACION NOMBRADA a esta forma de exportar.
export {
    esUnNumero,
    esTodoMayusculas
}
