import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { PublicRoutingModule } from './public-routing.module';




@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class PublicModule {  }
