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
      fecha:"1986-12-10",
      logo:'assets/img/asc.png'
    },
    {
      id:1,
      img:'assets/img/camisa.jpg',
      titulo:"Camisa",
      descripcion:"Ropa es el nombre genérico que reciben las prendas de vestir. Se trata de productos confeccionados con distintas clases de tejidos para cubrirse el cuerpo y abrigarse. ... Puede decirse que la ropa cumple con dos grandes funciones.",
      fecha:"1986-12-10",
      logo:'assets/img/vicky.jpg'
    },
    {
      id:2,
      img:'assets/img/falda.jpg',
      titulo:"Vestido",
      descripcion:"Ropa es el nombre genérico que reciben las prendas de vestir. Se trata de productos confeccionados con distintas clases de tejidos para cubrirse el cuerpo y abrigarse. ... Puede decirse que la ropa cumple con dos grandes funciones.",
      fecha:"1986-12-10",
      logo:'assets/img/asc.png'
    },
    {
      id:3,
      img:'assets/img/pantalon.jpg',
      titulo:"Pantalon",
      descripcion:"Ropa es el nombre genérico que reciben las prendas de vestir. Se trata de productos confeccionados con distintas clases de tejidos para cubrirse el cuerpo y abrigarse. ... Puede decirse que la ropa cumple con dos grandes funciones.",
      fecha:"1986-12-10",
      logo:'assets/img/vicky.jpg'
    },
    {
      id:4,
      img:'assets/img/polera.jpg',
      titulo:"Casaca",
      descripcion:"Ropa es el nombre genérico que reciben las prendas de vestir. Se trata de productos confeccionados con distintas clases de tejidos para cubrirse el cuerpo y abrigarse. ... Puede decirse que la ropa cumple con dos grandes funciones.",
      fecha:"1986-12-10",
      logo:'assets/img/asc.png'
    },
    {
      id:5,
      img:'assets/img/polo.jpg',
      titulo:"Polo",
      descripcion:"Ropa es el nombre genérico que reciben las prendas de vestir. Se trata de productos confeccionados con distintas clases de tejidos para cubrirse el cuerpo y abrigarse. ... Puede decirse que la ropa cumple con dos grandes funciones.",
      fecha:"1986-12-10",
      logo:'assets/img/vicky.jpg'
    },
    {
      id:6,
      img:'assets/img/short.jpg',
      titulo:"Short",
      descripcion:"Ropa es el nombre genérico que reciben las prendas de vestir. Se trata de productos confeccionados con distintas clases de tejidos para cubrirse el cuerpo y abrigarse. ... Puede decirse que la ropa cumple con dos grandes funciones.",
      fecha:"1986-12-10",
      logo:'assets/img/asc.png'
    },
    {
      id:7,
      img:'assets/img/vestido.jpg',
      titulo:"Saco",
      descripcion:"Ropa es el nombre genérico que reciben las prendas de vestir. Se trata de productos confeccionados con distintas clases de tejidos para cubrirse el cuerpo y abrigarse. ... Puede decirse que la ropa cumple con dos grandes funciones.",
      fecha:"1986-12-10",
      logo:'assets/img/vicky.jpg'
    },
    {
      id:8,
      img:'assets/img/zapatilla.jpg',
      titulo:"Zapatillas",
      descripcion:"Ropa es el nombre genérico que reciben las prendas de vestir. Se trata de productos confeccionados con distintas clases de tejidos para cubrirse el cuerpo y abrigarse. ... Puede decirse que la ropa cumple con dos grandes funciones.",
      fecha:"1986-12-10",
      logo:'assets/img/asc.png'
    },
    {
      id:9,
      img:'assets/img/blusa.jpg',
      titulo:"Blusa",
      descripcion:"Ropa es el nombre genérico que reciben las prendas de vestir. Se trata de productos confeccionados con distintas clases de tejidos para cubrirse el cuerpo y abrigarse. ... Puede decirse que la ropa cumple con dos grandes funciones.",
      fecha:"1986-12-10",
      logo:'assets/img/asc.png'
    },
  ]
  pBuscada:any [] = []

  constructor() { }

  getRopas(){
    return this.ropas
  }

  getDetalle(i:number){
    return this.ropas[i];
  }

  getBuscar(palabra:string){  

    let pBuscada:any [] = [] 

    const resultado = this.ropas.map((ropa)=>{
      if(ropa.titulo.toLowerCase() === palabra.toLowerCase()){
        pBuscada.push(ropa);  
      }
    })
    

    return pBuscada;      
     
  }
}
