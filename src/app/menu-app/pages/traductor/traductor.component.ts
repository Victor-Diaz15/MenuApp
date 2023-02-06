import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { arrayNumLetras } from "../../arrayNumLetras";

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.scss'],
})
export class TraductorComponent implements OnInit {

  num: number = 0;
  mensaje: string | undefined = "NaN";

  numeros: number[] = [];
  numerosLetras = arrayNumLetras;

  constructor(private alertController: AlertController) {}

  ngOnInit(): void {
    this.llenarArrayNums();
    console.log("klk", this.numeros);
  }

  async traducir() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Solo se aceptan numeros entre 1 y 1000',
      buttons: ['OK'],
    });

    if(this.num < 1 || this.num > 1000){
      await alert.present();
      this.num = 0;
    }

    else if(this.numeros.includes(this.num)){
      const indexNumber = this.numeros.findIndex(x => x === this.num);
      console.log("Index Number", indexNumber);
      this.mensaje = this.numerosLetras.find((x, index) => index === indexNumber);
      this.num = 0;
    }
  }

  llenarArrayNums(){
    for (let i = 1; i <= 1000; i++) {
      this.numeros.push(i);
    }
  }

}
