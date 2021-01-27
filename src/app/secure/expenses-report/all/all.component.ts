import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  user : any;
  data:any;
  // elements: any = [
  //   { expense_date: '', expense_category: '', expense_amount: '', note : '' }
  // ];
  elements:any = [];

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
        this.data = result
        for (const data of this.data) {
          var date = new Date(data.expense_date);
          let fullDate = date.getFullYear()+'-'+date.getMonth()+1+'-'+date.getDate()
          let elementData = { expense_date: fullDate, expense_category: data.expense_category, expense_amount: data.expense_amount, note : data.note }
          this.elements.push(elementData)
        }
        console.log(this.elements)
      }
      ,
       error  => {
          console.log('error'),
          console.log(error)
        }
    )}

}
