import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  user : any;
  elements: any = [
    { expense_date: '', expense_category: '', expense_amount: '', note : '' }
  ];

  headElements = ['Expenditure Date', 'Type' ,'Amount', 'Description'];
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');

    this.http.get('http://localhost:8000/allexpenses',{
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
