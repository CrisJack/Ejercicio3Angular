import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RopasService } from '../../servicios/ropas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  buscar:any = []

  constructor(private _ac:ActivatedRoute, private _servicio:RopasService) {
    this._ac.params.subscribe(params => {
      this.buscar = _servicio.getBuscar(params.titulo)

      console.log(this.buscar);
    
    })
   }

  ngOnInit() {
  }

}
