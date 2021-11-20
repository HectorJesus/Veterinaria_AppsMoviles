import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu: MenuController) {}

  estetica(){
    alert('Abrir estetica');
  }
  compraAnimales(){
    alert('Abrir tienda de animales');
  }
  adopcionAnimales(){
    alert('Abrir adopcion de animales');
  }
  comoLLegar(){
    const routerLink = '/ubicacion';
  }

}
