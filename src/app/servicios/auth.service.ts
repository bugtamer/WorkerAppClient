import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _apiAuth: string = 'http://localhost:8080/WorkerApp2/api/authenticate';
  private _token:string;

  constructor(private _httpClient:HttpClient) { }

  authenticateUser(usuario:Usuario):Observable<string>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'email': usuario.email,
        'password': usuario.pass
      })
    };

    return this._httpClient.get<any>(this._apiAuth,httpOptions)
    .pipe(
      tap(
        data => {this._token = data.token; console.log("token:",this._token);},
        error => console.log('error:', error)
      )
    );
  }

  getToken():string{
    return this._token;
  }

}
