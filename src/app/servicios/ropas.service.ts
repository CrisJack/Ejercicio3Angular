import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RopasService {

  ropas:any[]=[
    {
      id:0,
      img:'assets/img/blusa.jpg',
      titulo:"Blusa",
      descripcion:"Ropa es el nombre genérico que reciben las prendas de vestir. Se trata de productos confeccionados con distintas clases de tejidos para cubrirse el cuerpo y abrigarse. ... Puede decirse que la ropa cumple con dos grandes funciones.",
      fecha:"1986-12-10"
    },
    {
      id:1,
      img:'assets/img/camisa.jpg',
      titulo:"Blusa",
      descripcion:"Ropa es el nombre genérico que reciben las prendas de vestir. Se trata de productos confeccionados con distintas clases de tejidos para cubrirse el cuerpo y abrigarse. ... Puede decirse que la ropa cumple con dos grandes funciones.",
      fecha:"1986-12-10"
    },
    {
      id:2,
      img:'assets/img/falda.jpg',
      titulo:"Blusa",
      descripcion:"Ropa es el nombre genérico que reciben las prendas de vestir. Se trata de productos confeccionados con distintas clases de tejidos para cubrirse el cuerpo y abrigarse. ... Puede decirse que la ropa cumple con dos grandes funciones.",
      fecha:"1986-12-10"
    },
    {
      id:3,
      img:'assets/img/pantalon.jpg',
      titulo:"Blusa",
      descripcion:"Ropa es el nombre genérico que reciben las prendas de vestir. Se trata de productos confeccionados con distintas clases de tejidos para cubrirse el cuerpo y abrigarse. ... Puede decirse que la ropa cumple con dos grandes funciones.",
      fecha:"1986-12-10"
    },
    {
      id:4,
      img:'assets/img/polera.jpg',
      titulo:"Blusa",
      descripcion:"Ropa es el nombre genérico que reciben las prendas de vestir. Se trata de productos confeccionados con distintas clases de tejidos para cubrirse el cuerpo y abrigarse. ... Puede decirse que la ropa cumple con dos grandes funciones.",
      fecha:"1986-12-10"
    },
    {
      id:5,
      img:'assets/img/polo.jpg',
      titulo:"Blusa",
      descripcion:"Ropa es el nombre genérico que reciben las prendas de vestir. Se trata de productos confeccionados con distintas clases de tejidos para cubrirse el cuerpo y abrigarse. ... Puede decirse que la ropa cumple con dos grandes funciones.",
      fecha:"1986-12-10"
    },
    {
      id:6,
      img:'assets/img/short.jpg',
      titulo:"Blusa",
      descripcion:"Ropa es el nombre genérico que reciben las prendas de vestir. Se trata de productos confeccionados con distintas clases de tejidos para cubrirse el cuerpo y abrigarse. ... Puede decirse que la ropa cumple con dos grandes funciones.",
      fecha:"1986-12-10"
    },
    {
      id:7,
      img:'assets/img/vestido.jpg',
      titulo:"Blusa",
      descripcion:"Ropa es el nombre genérico que reciben las prendas de vestir. Se trata de productos confeccionados con distintas clases de tejidos para cubrirse el cuerpo y abrigarse. ... Puede decirse que la ropa cumple con dos grandes funciones.",
      fecha:"1986-12-10"
    },
    {
      id:8,
      img:'assets/img/zapatilla.jpg',
      titulo:"Blusa",
      descripcion:"Ropa es el nombre genérico que reciben las prendas de vestir. Se trata de productos confeccionados con distintas clases de tejidos para cubrirse el cuerpo y abrigarse. ... Puede decirse que la ropa cumple con dos grandes funciones.",
      fecha:"1986-12-10"
    },
  ]

  constructor() { }

  getRopas(){
    return this.ropas
  }

  getDetalle(i:number){
    return this.ropas[i];
  }
}
