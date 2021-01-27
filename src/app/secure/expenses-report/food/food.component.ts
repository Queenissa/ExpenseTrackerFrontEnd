import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  user : any;
  elements: any = [
    { expense_date: '', expense_amount: '', note : '' }
  ];

  headElements = ['Expenditure Date' ,'Amount', 'Description', 'Action'];
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');

    this.http.get('http://localhost:8000/food',{
      headers :{
        Authorization : `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      (result)=> {
        console.log(result);
        this.elements = result
      }
      ,
        error => {
          console.log('error'),
          console.log(error)
        }
    )}


}
