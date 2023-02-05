import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-multiplicacion',
  templateUrl: './tabla-multiplicacion.component.html',
  styleUrls: ['./tabla-multiplicacion.component.scss'],
})
export class TablaMultiplicacionComponent implements OnInit {

  num: number = 0;


  tableNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

  constructor() { }

  ngOnInit() {}

}
