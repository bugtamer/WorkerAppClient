import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GeolocalizacionService } from '../../servicios/geolocalizacion.service';
import { Ubicacion } from '../../modelos/Ubicacion';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  terminoBusqueda:string;
  distancia:number;
  valoracion:number;
  listaResultados:any[];
  ubicacion:Ubicacion;
  estaGeolocalizado:boolean;

  
  constructor(private _geoLocalizacion:GeolocalizacionService) {
    this.estaGeolocalizado = false;
    this.listaResultados = [];
    this.ubicacion = new Ubicacion();
    this.valoracion = 0;
    this.distancia = 5;
  }

  
  ngOnInit() {
    this._geoLocalizacion.getCurrentGeolocation().subscribe( receivedBrowserGeolocation => {
      this.ubicacion.latitud = receivedBrowserGeolocation.coords.latitude;
      this.ubicacion.longitud = receivedBrowserGeolocation.coords.longitude;
    } );
  }

  
  buscar(searchForm:NgForm) {
    this.terminoBusqueda = searchForm.form.value.terminoBusqueda;
    this._geoLocalizacion.getServiciosGeolocalizados(this.terminoBusqueda, this.valoracion, this.ubicacion, this.distancia)
      .subscribe( receivedResultados => {
        this.listaResultados = receivedResultados;
        console.log(receivedResultados);
      });
    console.log(searchForm);
  }

}
