import{RouterModule,Routes} from '@angular/router';
import{HomeComponent} from './components/home/home.component';
import{UsuarioComponent} from './components/usuario/usuario.component';
import{usuario_routes} from './components/usuario/usuario.routes' //Esto es lo que se importa para que las rutas hijas estén en este archivo.

const APP_ROUTES:Routes = [
    {path:'home', component: HomeComponent},
    {path:'usuario/:id', //Así es como se le pasa el identificador a esta ruta
        component: UsuarioComponent, //Lo que recibe children es un array de las rutas hijas que puede haber. Cada componente debe haberse importado antes en la cabecera del archivo.
        children: usuario_routes}, //Directamente, se añade este children y se le ponte apuntando a las rutas que se han importado como las rutas hijas.
    {path:'**', pathMatch:'full', redirectTo:'home'}
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);