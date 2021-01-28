import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AllUserComponent } from './all-user/all-user.component';
// import { ViewUserComponent } from './view-user/view-user.component';
import { ViewTableComponent } from './view-table/view-table.component';

@NgModule({
declarations: [AllUserComponent,
  ViewTableComponent],
  imports: [
    CommonModule,
 	  AdminRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }