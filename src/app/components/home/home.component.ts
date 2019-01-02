import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core'; //Se importan todos los diferentes métodos de carga de cada uno de los métodos de carga.

@Component({
  selector: 'app-home',
  template: `
<!--Todo esto que se incluye aquí se ha copiado y pegado desde app.component.html, donde estaba antes-->
  <div class="container scn-container">
  <app-ng-style></app-ng-style>
</div>

<div class="container scn-container">
  <app-css></app-css>
  <p>Un texto desde home.component</p>
</div>

<div class="container scn-container">
  <app-clases></app-clases>
</div>

<div class="container scn-container">
  <!--Así es como se hace cuando solo se quiere usar la directiva con sus características -->
  <p appResaltado>Este texto debe estar resaltado con la nueva directiva creada.</p>
  <!--Así es como se hace cuando se le quiere mandar algún dato que dependa de la directiva-->
  <p [appResaltado]="'cyan'">Este es otro texto con el que se envía un dato a la directiva.</p>
</div>

<div class="container scn-container">
<app-ng-switch></app-ng-switch>
</div>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy { //Esto debe implementar todos los métodos del ciclo de vida que existen.

  constructor() {
    console.log("constructor")
   }

//Es muy importante que cada uno de los implementados aparezca aquí porque si no, da un error en la clase.
  ngOnInit() {
    console.log("ngOnInit")
  }
  ngOnChanges() {
    console.log("ngOnChanges")
  }
  ngDoCheck() {
    console.log("ngDoCheck")
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked")
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit")
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked")
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit")
  }
  ngOnDestroy() {
    console.log("ngOnDestroy")
  }

}
