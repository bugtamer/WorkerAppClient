import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValoracionService {

  private _valoracionStore:number;
  private _valoracionObs:Observable<number>;

  constructor(private _httpClient:HttpClient) { }


  getValoracionFromApi(valId:number):Observable<number> {
    if (this._valoracionStore) {
      this._valoracionObs = of(this._valoracionStore);
    } else if (this._valoracionObs) {
      // observable ya esta en curso
    } else {
      this._valoracionObs = this._httpClient.get<number>(
        `http://localhost:8080/WorkerApp2/api/profesional/${valId}/valoracion/media`
      ).pipe(
        tap(
          data => {
            this._valoracionStore = data;
            localStorage.setItem('valoracion', JSON.stringify(this._valoracionStore));
          },
          error => console.error(error)
        ));
    }
    return this._valoracionObs;
  }

}
