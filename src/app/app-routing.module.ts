import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BoardComponent } from './board/board.component';
import { ShowCertificatesComponent} from './show-certificates/show-certificates.component';
import { CreateCertificatesComponent} from './create-certificates/create-certificates.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'board',
    component: BoardComponent,
  },
  {
    path: 'showCertificates',
    component: ShowCertificatesComponent,
  },
  {
    path: 'createCertificates',
    component: CreateCertificatesComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
