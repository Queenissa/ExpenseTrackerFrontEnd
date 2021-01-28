import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.scss']
})
export class AllUserComponent implements OnInit {

  user : any;
  // expense_category:any;
  // total_amount : any;

  elements: any = [
    { expense_category: '', total_amount: '' }
  ];

  headElements = ['Category', 'Amount'];
  
  constructor( private http : HttpClient) { }

  ngOnInit(): void {
    this.user = history.state.data;
    this.http.get('http://localhost:8000/userexpenses/history/' + this.user.id,{
      headers :{
        Authorization : `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      (result : any) => {
        console.log(result);
        
        for (let index = 1; index < result.length; index++) {

          this.elements = {
            expense_category : result[index][0],
            total_amount : result[index][1]
          }
        }
        
        
        console.log(this.elements);
        
      }
      ,
      error => {
        console.log('error'),
          console.log(error)
      }
    )

}
}
