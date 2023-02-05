import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumadora',
  templateUrl: './sumadora.component.html',
  styleUrls: ['./sumadora.component.scss'],
})
export class SumadoraComponent implements OnInit {


  num1!: number;
  num2!: number;

  resultado: number = 0;

  constructor() { }

  ngOnInit() {}

  sumar(){
    if(isNaN(this.num1)){
      this.num1 = 0;
    }
    else if(isNaN(this.num2)) {
      this.num2 = 0;
    }
    this.resultado = this.num1 + this.num2;
    this.num1 = 0;
    this.num2 = 0;
  }

}
