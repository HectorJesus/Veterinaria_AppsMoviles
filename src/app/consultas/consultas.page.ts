import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.page.html',
  styleUrls: ['./consultas.page.scss'],
})
export class ConsultasPage {

  // eslint-disable-next-line @typescript-eslint/no-shadow
  constructor(public alertController: AlertController) { }

  async presentAlert() {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Envio de datos, exitoso',
      message: 'Su cita ah sido reservada',
      buttons: ['Aceptar']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}

