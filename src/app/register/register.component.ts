import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  email: string;
  error: any;
  valid: any;
  constructor(private api: ApiService) {} /* Recibe el valor la clase ApiService y lo asigna a api*/
                                          /* en verdad es más bien como si renombrara a la classe */

 

  ngOnInit() {
  }

  register(ev) {
    ev.preventDefault();
    /*recive un parametro commo username y otro como password*/
    const { username, password , email} = this;
    /*si el trimeo del parametro guardado como nombre es distinto de vacío y el de
    password también llama a la api */
    if (username.trim() !== '' && password.trim() !== '' && email.trim() !== '') {
      this.api
        /*le pasa a la propiedad register el username y el pasword trimeado*/
        .register(username.trim(), password.trim(), email.trim())
        .then(res => {
          console.log('res',res);
          
            /* si lo puede hacer le pasa a .valid el valor "res"*/
          this.valid = res;
        })
        .catch(error => {
          console.log('error' , error);
          
          /* sino puede le pasa error al error*/
          this.error = error;
        });
    }
  }

}


