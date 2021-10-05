import { Routes } from '@angular/router';
import { InfoUsuarioComponent } from './info-usuario/info-usuario.component';

export const RUTAS_USUARIOS: Routes = [
    { path: ':usuarioId', component: InfoUsuarioComponent }
];