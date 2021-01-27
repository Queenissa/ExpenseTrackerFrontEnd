import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpensesReportComponent } from './expenses-report.component';
import { ClothingComponent } from './clothing/clothing.component';
import { ElectricityBillComponent } from './electricity-bill/electricity-bill.component';
import { FoodComponent } from './food/food.component';
import { PersonalCareComponent } from './personal-care/personal-care.component';
import { PhoneBillComponent } from './phone-bill/phone-bill.component';
import { SavingsComponent } from './savings/savings.component';
import { TransportationComponent } from './transportation/transportation.component';
import { WaterBillComponent } from './water-bill/water-bill.component';
import { ProfileComponent } from '../profile/profile.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { ElectricityUpdateComponent } from './electricity-bill/electricity-update/electricity-update.component';
import { ClothingUpdateComponent } from './clothing/clothing-update/clothing-update.component';
import { FoodUpdateComponent } from './food/food-update/food-update.component';
import { PersonalCareUpdateComponent } from './personal-care/personal-care-update/personal-care-update.component';
import { PhoneBillUpdateComponent } from './phone-bill/phone-bill-update/phone-bill-update.component';
import { SavingsUpdateComponent } from './savings/savings-update/savings-update.component';
import { TransportationUpdateComponent } from './transportation/transportation-update/transportation-update.component';
import { WaterBillUpdateComponent } from './water-bill/water-bill-update/water-bill-update.component';
import { AllComponent } from './all/all.component';

const routes: Routes = [
  {
    path: '', component: ExpensesReportComponent,
    children : [
      { path : 'all', component : AllComponent},
      { path : 'clothing', component : ClothingComponent},
      { path : 'electricity-bill', component : ElectricityBillComponent},
      { path : 'food', component : FoodComponent},
      { path : 'personal-care', component : PersonalCareComponent},
      { path : 'phone-bill', component : PhoneBillComponent},
      { path : 'savings', component : SavingsComponent},
      { path : 'transportation', component : TransportationComponent},
      { path : 'water-bill', component : WaterBillComponent},
      { path : 'profile', component : ProfileComponent},
      { path : 'clothing/clothing-update', component : ClothingUpdateComponent },
      { path : 'electricity-bill/electricity-update', component : ElectricityUpdateComponent },
      { path : 'food/food-update', component : FoodUpdateComponent }, 
      { path : 'personal-care/personal-care-update', component : PersonalCareUpdateComponent },
      { path : 'phone-bill/phone-bill-update', component : PhoneBillUpdateComponent },
      { path : 'savings/savings-update', component : SavingsUpdateComponent },
      { path : 'transportation/transportation-update', component : TransportationUpdateComponent },
      { path : 'water-bill/water-bill-update', component : WaterBillUpdateComponent },
      {path: '', redirectTo: 'all', pathMatch: 'full'},
      { path: '**', component:  PageNotFoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensesReportRoutingModule { }
