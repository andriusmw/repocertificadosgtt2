import { Component, OnInit, Input } from '@angular/core';
import { Certificates , Data } from '../Models.interface';
import { ApiService } from '../api.service';
//import  { ListCertificatesComponent } from '../list-certificates/list-certificates.component';


@Component({
  selector: 'app-show-certificates',
  templateUrl: './show-certificates.component.html',
  styleUrls: ['./show-certificates.component.css']
})
/* tiene un input que coge las clases certificates del array de certificados */
export class ShowCertificatesComponent implements OnInit {
  constructor(private api: ApiService) {} 
  @Input() listsCert: Array<Certificates>;
  

  ngOnInit() {}

/*display(){
  alert ("funciona click");
}*/
getcertificates(){
  this.api
  .getcertificates();
  
}

}