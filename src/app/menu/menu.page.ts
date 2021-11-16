import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { menuController } from '@ionic/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage{
  perros = [
    {id:1,name:'perro 1',url:'assets/dog_1.jpg'},
    {id:2,name:'perro 2',url:'assets/dog_2.jpg'},
    {id:3,name:'perro 3',url:'assets/dog_3.jpg'},
    {id:4,name:'perro 4',url:'assets/dog_4.jpg'}
  ];
  gatos = [
    {id:1,name:'gato 1',url:'assets/cat_1.jpg'},
    {id:2,name:'gato 2',url:'assets/cat_2.jpg'},
    {id:3,name:'gato 3',url:'assets/cat_3.jpg'},
    {id:4,name:'gato 4',url:'assets/cat_4.jpg'}
  ];
  constructor(private menu: MenuController) {}

    consultas(){
      alert('Abrir consultas');
    }
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
