import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { Error404Component } from './error404/error404.component';
import { InfoUsuarioComponent } from './info-usuario/info-usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { NuevoUsuarioGuard } from './nuevo-usuario/nuevo-usuario.guard';
import { RUTAS_USUARIOS } from './usuarios.routes';

const RUTAS_APP: Routes = [
    // { path: '', component: ListaUsuariosComponent },
    { path: 'usuarios', component: ListaUsuariosComponent, children: RUTAS_USUARIOS},
    { path: 'nuevo-usuario', component: NuevoUsuarioComponent, canDeactivate: [NuevoUsuarioGuard] },
    // { path: 'usuarios/:usuarioId', component: InfoUsuarioComponent },
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(modulo => modulo.AdminModule) },
    { path: '', redirectTo: 'usuarios', pathMatch: 'full'},
    { path: '**', component: Error404Component }
]

export const RoutingModule = RouterModule.forRoot(RUTAS_APP);