import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';


@NgModule({
  declarations: [
    ProfileUpdateComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MDBBootstrapModule.forRoot(),
    CommonModule
  ]
})
export class ProfileModule { }
