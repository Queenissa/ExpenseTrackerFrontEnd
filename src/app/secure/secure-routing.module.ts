import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecureComponent } from './secure.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileUpdateComponent } from './profile/profile-update/profile-update.component';

const routes: Routes = [
  {path : '', component : SecureComponent,
    children : [
      { path : 'dashboard', component : DashboardComponent},
      { path : 'expenses', component : ExpensesComponent},
      { path : 'profile', loadChildren: () => import(`./profile/profile.module`).then(m => m.ProfileModule)},
      { 
        path : 'expenses-report',
        loadChildren: () => import(`./expenses-report/expenses-report.module`).then(m => m.ExpensesReportModule) ,
      },
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      { path: '**', component:  PageNotFoundComponent}
    ]
  }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
