import { Component, OnInit, Input } from '@angular/core';

import { Certificates } from '../models.interface';

@Component({
  selector: 'app-list-certificates',
  templateUrl: './list-certificates.component.html',
  styleUrls: ['./list-certificates.component.css']
})
export class ListCertificatesComponent implements OnInit {
  @Input() ListCert: Certificates;

  constructor() { }

  ngOnInit() {
  }

}
