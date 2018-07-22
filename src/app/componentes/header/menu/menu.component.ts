import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../servicios/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private _authService:AuthService) { }

  ngOnInit() {
  }

  
  estaAutorizado():boolean {
    return this._authService.estaAutenticado;
  }

  
  logInOutUrl():string {
    return this._authService.estaAutenticado ? "['/logout']" : "['/login']";
  }

  
  logInOutTag():string {
    return this._authService.estaAutenticado ? 'Logout' : 'Login';
  }

}
