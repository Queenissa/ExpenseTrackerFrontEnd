import { AllUserComponent } from './all-user/all-user.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ViewTableComponent } from './view-table/view-table.component';

const routes: Routes = [
  {
    path : '', component : AdminComponent,
    children : [
      { path : 'viewTable', component : ViewTableComponent},
      { path : 'viewUser', component : AllUserComponent},
      {path: '', redirectTo: 'viewTable', pathMatch: 'full'},
      { path: '**', component:  PageNotFoundComponent}
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }