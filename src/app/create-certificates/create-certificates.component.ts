import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-certificates',
  templateUrl: './create-certificates.component.html',
  styleUrls: ['./create-certificates.component.css']
})





/*-----------------------------------------------------------------*/

export class CreateCertificatesComponent implements OnInit {

  alias: string;
  password: string;
  id_orga: string;
  nombre_cliente: string;
  contacto_renovacion: string;
  repositorio: string;
  observaciones: string;
  integration_list: string;

  error: any;
  valid: any;


  constructor(private api: ApiService) {} /* Recibe el valor la clase ApiService y lo asigna a api*/
                                          /* en verdad es más bien como si renombrara a la classe */

 

  ngOnInit() {
  }

  registerCert(ev) {
    ev.preventDefault();
    /*recive un parametro commo username y otro como password*/
    const { alias, password , id_orga,
      nombre_cliente,
      contacto_renovacion,
      repositorio,
      observaciones,
      integration_list} = this;
    /*si el trimeo del parametro guardado como nombre es distinto de vacío y el de
    password también llama a la api */
    if (alias.trim() !== '' && password.trim() !== '' && id_orga.trim() !== '' &&
    nombre_cliente.trim() !== '' && contacto_renovacion.trim() !== '' && repositorio.trim() !== '' &&
    observaciones.trim() !== '' && integration_list.trim() !== ''
    
    ) {
      this.api
        /*le pasa a la propiedad register el username y el pasword trimeado*/
        .registerCert(alias.trim(), password.trim(), id_orga.trim(), nombre_cliente.trim(),
        contacto_renovacion.trim(), repositorio.trim(), observaciones.trim(), integration_list.trim())
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


