import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { PageNotFoundComponent } from '../../page-not-found/page-not-found.component';

const routes: Routes = [
  {path : '', component : ProfileComponent,
children:
[
  {path: 'update-profile', component: ProfileUpdateComponent},
  {path: '**', component: PageNotFoundComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
