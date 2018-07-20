import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { of } from 'rxjs';

import { Profesional } from '../modelos/Profesional';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalService {

  private _profesionalStore:Profesional;
  private _profesionalObs:Observable<Profesional>;

  constructor(private _httpClient:HttpClient) { }

  getProfesionalFromApi(valId:number):Observable<Profesional> {
    console.log("ProfesionalService 1");
    
    if (this._profesionalStore) {
      console.log("ProfesionalService 2");
      this._profesionalObs = of(this._profesionalStore);
    } else if (this._profesionalObs) {
      console.log("ProfesionalService 3");
      // observable ya esta en curso
    } else {
      console.log("ProfesionalService 4");
      this._profesionalObs = this._httpClient.get<Profesional>(
        `http://localhost:8080/WorkerApp2/api/profesional/${valId}`
      ).pipe(
        tap(
          data => {
            console.log("ProfesionalService 5");
            console.log("data", data);
            this._profesionalStore = data;
            localStorage.setItem('Profesional', JSON.stringify(this._profesionalStore));
          },
          error => console.log('ProfesionalService', error)
        ));
    }
    console.log("ProfesionalService 6");
    return this._profesionalObs;
  }

}
