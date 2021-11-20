import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage{
  constructor(public navCtrl: NavController) {}
  login(){
  }
  consultas(): void{
    alert('Sin notificaciones');
  }
}
