export class Vendehumo {
    constructor(
        public id: string | null = null,
        public nombre: string,
        public categorias: [],
        public rrss: Array<string>,
        public descripcion: string,
        public votos: number,
        public fechaCreacion: string,
        public usuarioId: string,
        public foto: string
    ) {}
}
