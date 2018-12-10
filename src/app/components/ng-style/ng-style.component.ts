/* 
* Este archivo se ha generado con el siguiente comando: ng g c components/ngStyle -it -is
* Eso quiere decir que no hay ni un archivo .html ni uno .css en el documento. Por eso aparece lo de "template" al principio, que permite meter ahí código HTML.
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  //A partir de aquí, todo lo que se muestra es como si estuviera en el documento HTML como los ejemplos vistos hasta ahora.
  template: `
  <!-- Para decirle a Angular que queremos que maneje un estilo determinado, hay que usar la directiva ngStyle y colocarla entre llaves. 
  el ngStyle tiene tres formas de recibir objetos:
  1) [ngStyle]="{'font-size':'15px'} 
  Aunque aquí se puede introducir una variable numérica:
  [ngStyle]="{'font-size':tamano+'px'} <-- Aunque esto no es muy elegante, esto funciona y ya se puede cambiar de forma dinámica el valor del tamaño de la fuente.
  2) [style.fontSize]="'40px'"
  Ojo con esta forma porque hay que tener en cuenta que la propiedad es font-size y no se pueden poner los guiones en este tipo de corchetes, así que hay que usar mayúsculas.
  [style.fontSize.px]="tamano"
  Esto nos lo hace más dinámico aún porque ya sabe qué unidad tiene el número que le pasamos ahí y no hay que hacer uan concatenación como antes. Esto también funciona con porcentajes, por ejemplo -->
    <p [style.fontSize.px]="tamano">
      Hola, mundo. Esta es una etiqueta HTML.
    </p>
<!-- Aquí se han usado dos botoens que, al pulsarlos, alteran el valor de la variable que controla el tamaño de la etiqueta <p> que hay justo encima. -->
    <button type="button" class="btn btn-primary botoncete" (click)="tamano = tamano + 5">
      <i class="fa fa-plus"></i>
    </button>
    <button type="button" class="btn btn-primary botoncete" (click)="reducirTamano()">
    <!--Ojo, que con la función de reducirTamano() se contempla que no se atribuyan valores negativos a esta variable.-->
    <i class="fa fa-minus"></i>
  </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano:number;

  constructor() {
    
    this.tamano = 20;

   }

  ngOnInit() {
  }

  reducirTamano() {
    if(this.tamano > 0)
      this.tamano = this.tamano - 5;
  }

}
