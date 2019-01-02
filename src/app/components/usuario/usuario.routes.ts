//Lo que se hace en este archivo es colocar todas las rutas hijas que hagan falta. Así, se pueden eliminar del archivo app.routes.ts y que todo quede mucho más ordenado y limpio.
import {Routes} from '@angular/router'; //No se importa el RoterModule porque no hace falta.
import{UsuarioDetalleComponent} from './usuario-detalle.component';
import{UsuarioEditarComponent} from './usuario-editar.component';
import{UsuarioNuevoComponent} from './usuario-nuevo.component';

//Esto es lo que se debe exportar porque hay que indicar, en el archivo app.routes.ts que estas rutas también deben considerarse.
export const usuario_routes: Routes = [
    {path: 'nuevo', component: UsuarioNuevoComponent},
    {path: 'editar', component: UsuarioEditarComponent},
    {path: 'detalle', component: UsuarioDetalleComponent},
    {path: '**', component: UsuarioNuevoComponent}
]; //Si se quieren añadir rutas hijas dentro de estas rutas, hay que hacer lo mismo que se ha hecho con el archivo principal y este.

//Ojo, que se ha eliminado el EXPORT que viene en el app.routes.ts.