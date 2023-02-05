import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.scss'],
})
export class TraductorComponent implements OnInit {

  num: number = 0;
  mensaje: string = "NaN";
  constructor() { }

  ngOnInit() {}

  traducir(){
    if(this.num === 1){
      this.mensaje = "Uno";
    }
    else{
      return;
    }
  }

}
