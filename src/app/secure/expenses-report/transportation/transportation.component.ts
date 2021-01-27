import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.scss']
})
export class TransportationComponent implements OnInit {

  user : any;
  elements: any = [
    { expense_date: '', expense_amount: '', note : '' }
  ];

  headElements = ['Expenditure Date' ,'Amount', 'Description', 'Action'];
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');

    this.http.get('http://localhost:8000/transportation',{
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
