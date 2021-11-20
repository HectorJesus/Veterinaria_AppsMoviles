import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.page.html',
  styleUrls: ['./compras.page.scss'],
})
export class ComprasPage implements OnInit {
  perros = [
    { id:1,
      name:'Bulldog',
      url:'assets/dog_1.jpg',
      desc: 'Originario del Reino Unido, amigable y dormilon'
    },
    { id:2,
      name:'Pastor Aleman',
      url:'assets/dog_2.jpg',
      desc: 'Un gran compañero, noble y leal'
    },
    { id:3,
      name:'Chihuahua',
      url:'assets/dog_3.jpg',
      desc: 'Un pequeño amigo, jugueton y un poco ruidoso'},
    { id:4,
      name:'Poodle',
      url:'assets/dog_4.jpg',
      desc: 'Un hermoso ejemplar, elegante y calido'}
  ];
  gatos = [
    { id:1,
      name:'Persa',
      url:'assets/cat_1.jpg',
      desc: 'Se caracteriza por tener una cara ancha y plana y un gran abundante pelaje de variados colores.'},
    { id:2,
      name:'british shorthair',
      url:'assets/cat_2.jpg',
      desc: 'Estos gatos se protegen muy bien del clima británico por su pelaje doble e impermeable.'},
    { id:3,
      name:'Siames',
      url:'assets/cat_3.jpg',
      desc: 'Su inteligencia y carácter bondadoso lo convierten en el gato perfecto para una familia.'},
    { id:4,
      name:'Esfinge',
      url:'assets/cat_4.jpg',
      desc: 'Su cabeza es triangular con los ojos separados y pómulos prominentes, lo que recuerda a los gatos del antiguo Egipto'}
  ];
  hamsters = [
    { id:1,
      name:'Roborovski',
      url:'assets/ham_3.jpg',
      desc: 'Ojos grandes, pelaje suave, lacio y blanco, un amiguito muy guapeton.'},
    { id:2,
      name:'Dorado',
      url:'assets/ham_4.jpg',
      desc: 'Su pelaje es color dorado y puede ser corto o largo,  Pesan entre 90 y 150 gramos y suelen medir unos 13 – 17 cm.'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
