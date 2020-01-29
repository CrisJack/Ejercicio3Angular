import { Component, OnInit } from '@angular/core';
import { RopasService } from '../../servicios/ropas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ropas',
  templateUrl: './ropas.component.html',
  styleUrls: ['./ropas.component.css']
})
export class RopasComponent implements OnInit {

  ropas:any[]=[];

  constructor(private _ropasServicios:RopasService, private _ruta:Router) {
     
      this.ropas= _ropasServicios.getRopas();
   }

  ngOnInit() {
  }

  verDetalle(i:number){
    this._ruta.navigate(['detalle',i])
  }

}
