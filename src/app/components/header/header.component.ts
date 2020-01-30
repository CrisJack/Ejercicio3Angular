import { Component, OnInit } from '@angular/core';
import { RopasService } from '../../servicios/ropas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ropas:any[]=[];

  constructor(private _ropasServicios:RopasService, private _ruta:Router) {
     
      this.ropas= _ropasServicios.getRopas();
   }

  ngOnInit() {
  }

  buscarRopa(palabra:string){
    this._ruta.navigate(['buscar',palabra])
  }

}
