/*Esto se ha creado de forma automática con la directiva:
ng g c components/usuario/usuarioNuevo -is -it --flat
Lo último significa que no cree una nueva carpeta para este componente, sino que se debe crear todo dentro de la carpeta especificada. */ 
import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
