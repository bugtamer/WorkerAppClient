import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { of } from 'rxjs';

import { AuthService } from '../servicios/auth.service';
import { Profesional } from '../modelos/Profesional';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalService {

  private _profesionalStore:Profesional;
  private _profesionalObs:Observable<Profesional>;

  constructor(private _httpClient:HttpClient, private _authService:AuthService) { }

  getProfesionalFromApi(valId:number):Observable<Profesional> {
    
    if (this._profesionalStore) {
      this._profesionalObs = of(this._profesionalStore);
    } else if (this._profesionalObs) {
      // observable ya esta en curso
    } else {
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'token': sessionStorage.getItem('token')
        })
      };
      this._profesionalObs = this._httpClient.get<Profesional>(
        `http://localhost:8080/WorkerApp2/api/profesional/${valId}`, httpOptions
      ).pipe(
        tap(
          data => {
            this._profesionalStore = data;
            this._profesionalStore.password = null;
            localStorage.setItem('Profesional', JSON.stringify(this._profesionalStore));
          },
          error => console.error(error)
        ));
    }
    return this._profesionalObs;
  }

}
