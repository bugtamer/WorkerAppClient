import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ValoracionService } from '../../servicios/valoracion.service';
import { ProfesionalService } from '../../servicios/profesional.service';
import { Profesional } from '../../modelos/Profesional';
import { GeolocalizacionService } from '../../servicios/geolocalizacion.service';
import { Ubicacion } from '../../modelos/Ubicacion';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  _pid:number;
  _valoracionMedia:number;
  _profesional:Profesional;
  _ubicacionUsuario:Ubicacion;
  _distancia:string;
  geo:string;

  
  constructor(
    private _geoLocalizacion:GeolocalizacionService,
    private _valoracionService:ValoracionService,
    private _profesionalService:ProfesionalService,
    private _route:ActivatedRoute)
  {
      this._profesional = new Profesional();
      this._profesional.ubicacion = new Ubicacion();
      this._ubicacionUsuario = new Ubicacion();
  }


    ngOnInit() {
      this._route.params.subscribe( receivedPathParams => {
        this._pid = receivedPathParams['pid'];
        this.setValoracionMedia(this._pid);
        this.setProfesional(this._pid);
        };
    }

    
    private setValoracionMedia(pid:number):void {
      this._valoracionService.getValoracionFromApi(this._pid).subscribe( receivedValoracion => {
        this._valoracionMedia = receivedValoracion;
      };
    }

    
    private setProfesional(pid:number):void {
      this._profesionalService.getProfesionalFromApi(this._pid).subscribe( (receivedProfesinal) => {
        this._profesional = receivedProfesinal;
        this.geolocalizar();
      };
    }

  
    geolocalizar():void {
      this.setUbicacionUsuario();
    }
  
    
    private setUbicacionUsuario():void {
      this._geoLocalizacion.getCurrentGeolocation().subscribe( receivedBrowserGeolocation => {
        this._ubicacionUsuario.latitud = receivedBrowserGeolocation.coords.latitude;
        this._ubicacionUsuario.longitud = receivedBrowserGeolocation.coords.longitude;
        this.setDistancia(this._ubicacionUsuario, this._profesional.ubicacion);
      } );
    }

    
    private setDistancia(origen:Ubicacion, destino:Ubicacion):void {
      this._distancia = this._geoLocalizacion.getDistanciaKm(origen, destino).toLocaleString('es-ES');
  }

}
