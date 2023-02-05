import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  public appPages = [
    { title: 'Inicio', url: '/folder/Inicio', icon: 'home' },
    { title: 'Sumadora', url: '/folder/Sumadora', icon: 'calculator' },
    { title: 'Traductor de Numeros', url: '/folder/Traductor de Numeros', icon: 'text' },
    { title: 'Tabla de Multiplicacion', url: '/folder/Tabla de Multiplicacion', icon: 'calculator' },
    { title: 'Mi Experiencia', url: '/folder/Mi Experiencia', icon: 'happy' }
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}

}
