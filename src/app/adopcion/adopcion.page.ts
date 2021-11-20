import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adopcion',
  templateUrl: './adopcion.page.html',
  styleUrls: ['./adopcion.page.scss'],
})
export class AdopcionPage implements OnInit {
  perros = [
    { id:1,
      name:'Labrador',
      url:'assets/dog_5.jpg',
      desc: 'Le encanta recibir cariños y pasar tiempo con las personas'
    },
    { id:2,
      name:'Golden Retriever',
      url:'assets/dog_6.jpg',
      desc: 'Amable, amigable y confiado, un excelente compañero'
    },
    { id:3,
      name:'Chihuahua',
      url:'assets/dog_3.jpg',
      desc: 'Un pequeño amigo, jugueton y un poco ruidoso'},
    { id:4,
      name:'Beagle',
      url:'assets/dog_7.jpg',
      desc: 'Pequeño, cariñoso, inteligente y adorable, es un todo en uno!'}
  ];
  gatos = [
    { id:1,
      name:'Ragdoll',
      url:'assets/cat_5.jpg',
      desc: 'Pelaje largo, cariñoso y muy inteligente'},
    { id:2,
      name:'Munchkin',
      url:'assets/cat_6.jpg',
      desc: 'De tamaño mediano, con patas extremadamente cortas y la columna vertebral larga.'},
    { id:3,
      name:'Siberiano',
      url:'assets/cat_7.jpg',
      desc: 'La cola es más ancha en la base que en la punta y tiene el pelo largo y muy denso.'},
    { id:4,
      name:'Birmano',
      url:'assets/cat_8.jpg',
      desc: 'Intensos ojos azules. Su cabeza es triangular, aunque tiene un cráneo tan amplio que la cabeza parece prácticamente redonda.'}
  ];
  hamsters = [
    { id:1,
      name:'Chino',
      url:'assets/ham_1.jpg',
      desc: 'Roedor alargado y delgado que tiene cola prensil de aproximadamente 1 cm.'},
    { id:2,
      name:'Ruso',
      url:'assets/ham_2.jpg',
      desc: 'La cola es corta y el cuerpo es rechoncho, lo que resulta adorable para muchas personas.'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
