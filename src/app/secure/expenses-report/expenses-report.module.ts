import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxPaginationModule } from 'ngx-pagination';

import { FoodComponent } from './food/food.component';
import { SavingsComponent } from './savings/savings.component';
import { WaterBillComponent } from './water-bill/water-bill.component';
import { ElectricityBillComponent } from './electricity-bill/electricity-bill.component';
import { PhoneBillComponent } from './phone-bill/phone-bill.component';
import { ClothingComponent } from './clothing/clothing.component';
import { PersonalCareComponent } from './personal-care/personal-care.component';
import { TransportationComponent } from './transportation/transportation.component';
import { ExpensesReportRoutingModule } from './expenses-report-routing.module';
import { ClothingUpdateComponent } from './clothing/clothing-update/clothing-update.component';
import { ElectricityUpdateComponent } from './electricity-bill/electricity-update/electricity-update.component';
import { FoodUpdateComponent } from './food/food-update/food-update.component';
import { PersonalCareUpdateComponent } from './personal-care/personal-care-update/personal-care-update.component';
import { PhoneBillUpdateComponent } from './phone-bill/phone-bill-update/phone-bill-update.component';
import { SavingsUpdateComponent } from './savings/savings-update/savings-update.component';
import { TransportationUpdateComponent } from './transportation/transportation-update/transportation-update.component';
import { WaterBillUpdateComponent } from './water-bill/water-bill-update/water-bill-update.component';
import { AllComponent } from './all/all.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FoodComponent,
    SavingsComponent,
    WaterBillComponent,
    ElectricityBillComponent,
    PhoneBillComponent,
    ClothingComponent,
    PersonalCareComponent,
    TransportationComponent,
    ClothingUpdateComponent,
    ElectricityUpdateComponent,
    FoodUpdateComponent,
    PersonalCareUpdateComponent,
    PhoneBillUpdateComponent,
    SavingsUpdateComponent,
    TransportationUpdateComponent,
    WaterBillUpdateComponent,
    AllComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    ExpensesReportRoutingModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ExpensesReportModule { }
