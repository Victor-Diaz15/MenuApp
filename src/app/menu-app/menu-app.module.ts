import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SumadoraComponent } from './pages/sumadora/sumadora.component';
import { TraductorComponent } from './pages/traductor/traductor.component';
import { TablaMultiplicacionComponent } from './pages/tabla-multiplicacion/tabla-multiplicacion.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InicioComponent,
    SumadoraComponent,
    TraductorComponent,
    TablaMultiplicacionComponent,
    ExperienciaComponent,
  ],
  exports: [
    InicioComponent,
    SumadoraComponent,
    TraductorComponent,
    TablaMultiplicacionComponent,
    ExperienciaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class MenuAppModule { }
