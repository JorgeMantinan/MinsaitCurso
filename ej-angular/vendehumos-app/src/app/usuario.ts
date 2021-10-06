export class Usuario {
    constructor(
        public id:  string | null = null,
        public nombre: string,
        public foto: string,
        public contrasena: string,
        public email: string) {
    }
}