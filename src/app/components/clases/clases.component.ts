import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
})
export class ClasesComponent implements OnInit {
  
  alerta:string;
  loading:boolean;

  propiedades:Object = {
    danger:true
  }

  constructor() { 
    this.alerta = "alert-primary";
    this.loading = false;
  }

  ngOnInit() {
  }

  ejecutar() {
    this.loading = true;
    //Lo que hace aquí es una función en la que, pasados tres segundos, le cambia de nuevo el valor a la propiedad loading por FALSE.
    setTimeout(()=> this.loading = false,3000)
  }

}
