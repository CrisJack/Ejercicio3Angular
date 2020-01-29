import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RopasService } from '../../servicios/ropas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  detalle:any = {}

  constructor(private _ac:ActivatedRoute, private _servicio:RopasService) {
    this._ac.params.subscribe(params => {
      this.detalle = _servicio.getDetalle(params.id)
    })
   }

  ngOnInit() {
  }

}
