import { Routes } from '@angular/router';
import { InfoUsuarioComponent } from './info-usuario/info-usuario.component';
import { InfoUsuarioGuard } from './info-usuario/info-usuario.guard';

export const RUTAS_USUARIOS: Routes = [
    { path: ':usuarioId', component: InfoUsuarioComponent, canActivate: [InfoUsuarioGuard] }
];