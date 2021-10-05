import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { InfoUsuarioComponent } from './info-usuario/info-usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { RUTAS_USUARIOS } from './usuarios.routes';

const RUTAS_APP: Routes = [
    // { path: '', component: ListaUsuariosComponent },
    { path: 'usuarios', component: ListaUsuariosComponent, children: RUTAS_USUARIOS},
    { path: 'nuevo-usuario', component: NuevoUsuarioComponent },
    // { path: 'usuarios/:usuarioId', component: InfoUsuarioComponent },
    { path: '', redirectTo: 'usuarios', pathMatch: 'full'},
    { path: '**', component: Error404Component }
]

export const RoutingModule = RouterModule.forRoot(RUTAS_APP);