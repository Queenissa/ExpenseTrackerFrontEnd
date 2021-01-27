import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', component: PublicComponent,
    children : [
      { path : 'home', component : HomeComponent},
      { path : 'login', component : LoginComponent},
      { path : 'register', component : RegisterComponent},
      { path : '', redirectTo : 'home', pathMatch: 'full'},
      { path: '**', component:  PageNotFoundComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
