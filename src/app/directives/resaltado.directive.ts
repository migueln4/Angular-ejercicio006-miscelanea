/*Esto se ha generado automáticamente en el Angular CLI con el comando ng g d directives/resaltado */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
//Hay que importar el ElementRef para poder hacer referencia a todos los objetos que tengan la directiva como un atributo.
//HostListener sirve para poder estar pendiente de qué ocurre con el objeto al que se le pone esta directiva.
//Input se incluye porque le estamos mandando información desde el HTML

@Directive({
  selector: '[appResaltado]' //Este es el selector que se debe coger en plan atributo.
})
export class ResaltadoDirective {

  constructor(private elementref:ElementRef) {
    elementref.nativeElement.style.backgroundColor = "yellow"; //Así es como se debe hacer referencia al elemento al que está apuntando. nativeElement hace referencia directamente al elemento y, de ahí, hay que elegir qué atributos queremos atacar. En el ejemplo, el estilo; y de eso, el fondo.
   }

/* En estas líneas comentadas, lo que se hace es definir el fondo del elemento dependiendo de si entra el ratón o sale de encima de él. Sin tener en cuenta la información que le esté llegando desde el HTML

   //Así es como se trata el elemento HostListener.
   @HostListener('mouseenter') ratonEntra() {
     //Lo que se le pasa entre paréntesis está predefinido. Para ver qué se puede hacer con esto, hay que consultar la documentación
    this.elementref.nativeElement.style.backgroundColor = "orange";
   }

   @HostListener('mouseleave') ratonSale() {
     this.elementref.nativeElement.style.backgroundColor = "pink";
   } */

   @Input("appResaltado") nuevoColor:string; //Idealmente, esto debería estar por encima del constructor.

   @HostListener('mouseenter') ratonEntra() {
    this.resaltar(this.nuevoColor || "orange"); //Esta es una forma de JavaScript que permite mandar una cosa u otra. Esto quiere decir que a la función resaltar se le va a mandar el valro del nuevoColor, pero si no se tiene nada, se le va a mandar un color por defecto: "orange".
  }

  @HostListener('mouseleave') ratonSale() {
    this.resaltar("pink");
  }

  private resaltar(color:string) {
    this.elementref.nativeElement.style.backgroundColor = color;
  }


}
