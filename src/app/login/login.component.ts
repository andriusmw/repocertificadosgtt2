import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  username: string;
  password: string;
  error: any;
  constructor(private api: ApiService, private router: Router) {}
  /* Vuelve a "conectar" con la clase ApiService mediante el nombre "api" y hace lo mismo con la clase
  "Router" y "router"*/

  login(ev) {
    ev.preventDefault();
    /* Cuando se hace click en el Submit del formulario de Login en el .html se llama a login() que
    recibe el username y el password y los guarda en la constante "const" y llama a la API con "api"
    luego le pasa el trimeo de de username y password (mirar ahora apiService) . Después  se ejecuta 
    la estructura .then . cath similar a un IF ELSE en el que en caso de error te muestra undefined 
    o el tipo de error y en caso de que coincida te manda al /board. Esto es posible por el 
    ApiService y el Router.*/
    const { username, password } = this;
    if (username.trim() !== '' && password.trim() !== '') {
      this.api
        .login(username.trim(), password.trim())
        .then( res => {
          console.log('res',res);
          this.error = undefined;
          this.router.navigate(['/board']); 
          /* Entiendo que al llegar al "caso de error: 200 ( logeado) " vuelve al then del 
          login-view.component.ts
            y eso pone en "error": "undefined" porque no hay error y aplica al router a que me lleve
             a /board*/
        })
        .catch(error => {
          console.log('error' , error);
          this.error = error;
        });
    }
  }
}
