/*Esto se ha creado de forma automática con la directiva:
ng g c components/usuario/usuarioNuevo -is -it --flat
Lo último significa que no cree una nueva carpeta para este componente, sino que se debe crear todo dentro de la carpeta especificada. */ 
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styleUrls: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private router:ActivatedRoute) {
    this.router.parent.params.subscribe(parametros => {
      //Al hacer router.parent, directamente se hace referencia a la ruta padre. Por eso, cuando se hace referencia a sus parámetros, ya se puede acceder a todos ellos, porque sí que los hay. De otro modo, al estar los parámetros a la izquierda del final de la ruta hija, no se puede acceder a ellos.
      console.log("Ruta HIJA (usuario nuevo)");
      console.log(parametros);
    })
   }

  ngOnInit() {
  }

}
