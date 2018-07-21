import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ubicacion } from '../modelos/Ubicacion';
import { BrowserGeolocation } from '../modelos/BrowserGeolocation';

@Injectable({
  providedIn: 'root'
})
export class GeolocalizacionService {

  constructor() { }

  
  getCurrentGeolocation():Observable<any> {
    return Observable.create(observer => {
      if(window.navigator && window.navigator.geolocation) {
        let onSuccess = (position) => {
          observer.next(position);
          observer.complete();
        };
        let onError = (error) => observer.error(error);
        window.navigator.geolocation.getCurrentPosition(onSuccess, onError);
      } else {
        let errorMsg = {code: 0, message: "Your browser do not support geolocation"};
        observer.error(errorMsg);
      }
    });
  }


  getDistanciaKm(origen:Ubicacion, destino:Ubicacion):number {
    return this.haversineKm(origen, destino);
  }

  
  // http://www.geodatasource.com/developers/javascript
  private haversineKm(origen:Ubicacion, destino:Ubicacion):number {
    let radLat1 = this.toRad(destino.latitud);
    let radLat2 = this.toRad(origen.latitud);
    let theta = destino.longitud - origen.longitud;
    let radTheta = this.toRad(theta);
    let dist = Math.sin(radLat1) * Math.sin(radLat2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
    dist = (dist > 1) ? 1 : dist;
    dist = Math.acos(dist);
    dist = this.toDec(dist);
    dist = dist * 60 * 1.1515;
    dist = dist * 1.609344; // parse to km
    return dist;
  }

  
  private toRad(dec:number):number {
    return dec * Math.PI/180
  }

  
  private toDec(rad:number):number {
    return rad * 180/Math.PI
  }

}
