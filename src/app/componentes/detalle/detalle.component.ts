import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ValoracionService } from '../../servicios/valoracion.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  _pid:number;
  _valoracionMedia:number;

  constructor(private _valoracionService:ValoracionService, private _route:ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe( receivedPathParams => {
    this._pid = receivedPathParams['pid'];
    this._valoracionService.getValoracionFromApi(this._pid).subscribe( receivedValoracion => {
      console.log('receivedTasks', receivedValoracion);
      this._valoracionMedia = receivedValoracion;
      console.log('this._valoracionMedia', this._valoracionMedia);
    }
  }

}
