import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: []
})
export class NgSwitchComponent implements OnInit {

  alerta:string;
  alertas:string[] = 
  ["primary","secondary","success","warning","info","light","dark"];
  indice:number;
  pinchado:boolean;

  constructor() {
    this.alerta = "danger";
    this.indice = 0;
    this.pinchado = false;
   }

  ngOnInit() {
  }

  cambiarAlerta() {
    if(!this.pinchado) {
      this.pinchado = true;
      this.alerta = this.alertas[this.indice];
    } else {
      this.indice = this.indice + 1;
      if(this.indice === this.alertas.length) {
        this.indice = 0;
      }
      this.alerta = this.alertas[this.indice];
    }
  }

}
