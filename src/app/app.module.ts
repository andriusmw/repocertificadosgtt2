import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule  } from "@angular/forms";
import { ApiService } from './api.service'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BoardComponent } from './board/board.component';
import { ShowCertificatesComponent } from './show-certificates/show-certificates.component';
import { CreateCertificatesComponent } from './create-certificates/create-certificates.component';
import { ListCertificatesComponent } from './list-certificates/list-certificates.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    BoardComponent,
    ShowCertificatesComponent,
    CreateCertificatesComponent,
    ListCertificatesComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
 
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
