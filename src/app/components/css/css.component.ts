import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      css works!
    </p>
  `,
//Aquí se puede añadir todo el estilo CSS que se desee. ¡Ojo!, que no hay que olvidar poenr las ``
//Angular lo que hace es crear un scope solo para aquello a lo que se le está creando un estilo en particular. Así se evita que los estilos colisionen. Esto también aplica en el padre, que también se encarga de proteger de los casos. La única forma de aplicar estilos de forma global es ahcerlo dentro del archivo style.css o en cualqueir otro archivo que se tenga apuntando desde angular.json.
  styles: [`
  p {
    color: red;
    font-size: 30px;
  }
  `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
