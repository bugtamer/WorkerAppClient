import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ValoracionService } from '../../servicios/valoracion.service';
import { ProfesionalService } from '../../servicios/profesional.service';
import { Profesional } from '../../modelos/Profesional';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  _pid:number;
  _valoracionMedia:number;
  _profesional:Profesional;

  
  constructor(
    private _valoracionService:ValoracionService,
    private _profesionalService:ProfesionalService,
    private _route:ActivatedRoute) { }


    ngOnInit() {
      this._route.params.subscribe( receivedPathParams => {
        this._pid = receivedPathParams['pid'];
        this.setValoracionMedia(this._pid);
        this.setProfesional(this._pid);
      }
    }

    
    setValoracionMedia(pid:number) {
      this._valoracionService.getValoracionFromApi(this._pid).subscribe( receivedValoracion => {
        console.log('receivedValoracion', receivedValoracion);
        this._valoracionMedia = receivedValoracion;
        console.log('this._valoracionMedia', this._valoracionMedia);
      }
    }

    
    setProfesional(pid:number) {
      let pro:Profesional;
      this._profesionalService.getProfesionalFromApi(this._pid).subscribe( receivedData => {
        console.log('receivedProfesional', receivedData);
        this._profesional = receivedData;
        console.log('this._profesional', this._profesional);
      }
    }

}
