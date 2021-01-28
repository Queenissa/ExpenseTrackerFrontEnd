import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export interface Expense {
  expense_category : String,
  expense_amount : Number,
  note : String,
  expense_date : Date,
}

const API_URL: string = 'http://localhost:8000';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  
  user : any;
  expenses : Expense[] =[];
  currentIndex: number;

  constructor(
    private http : HttpClient
  ) { }

  getExpenses(){

    this.user = localStorage.getItem('user');

    this.http.get(API_URL + '/allexpenses',{
      headers :{
        Authorization : `Bearer ${localStorage.getItem('token')}`
      }
    })

  }

}
