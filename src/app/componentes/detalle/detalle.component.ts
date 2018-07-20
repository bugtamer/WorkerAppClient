import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ValoracionService } from '../../servicios/valoracion.service';
<<<<<<< HEAD
import { ProfesionalService } from '../../servicios/profesional.service';
import { Profesional } from '../../modelos/Profesional';
=======
>>>>>>> master

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  _pid:number;
  _valoracionMedia:number;
<<<<<<< HEAD
  _profesional:Profesional;

  constructor(private _valoracionService:ValoracionService, private _profesionalService:ProfesionalService, private _route:ActivatedRoute) { }
=======

  constructor(private _valoracionService:ValoracionService, private _route:ActivatedRoute) { }
>>>>>>> master

  ngOnInit() {
    this._route.params.subscribe( receivedPathParams => {
    this._pid = receivedPathParams['pid'];
<<<<<<< HEAD
    
    this._valoracionService.getValoracionFromApi(this._pid).subscribe( receivedValoracion => {
      console.log('receivedValoracion', receivedValoracion);
      this._valoracionMedia = receivedValoracion;
      console.log('this._valoracionMedia', this._valoracionMedia);
    }
    
    this._profesionalService.getProfesionalFromApi(this._pid).subscribe( receivedProfesional => {
      console.log('receivedProfesional', receivedProfesional);
      this._profesional = receivedProfesional;
      console.log('this._profesional', this._profesional);
    }
=======
    this._valoracionService.getValoracionFromApi(this._pid).subscribe( receivedValoracion => {
      console.log('receivedTasks', receivedValoracion);
      this._valoracionMedia = receivedValoracion;
      console.log('this._valoracionMedia', this._valoracionMedia);
    }
>>>>>>> master
  }

}
