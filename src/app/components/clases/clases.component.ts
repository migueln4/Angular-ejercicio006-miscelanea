import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
})
export class ClasesComponent implements OnInit {
  
  alerta:string;

  propiedades:Object = {
    danger:true
  }

  constructor() { 
    this.alerta = "alert-primary";
  }

  ngOnInit() {
  }

}
