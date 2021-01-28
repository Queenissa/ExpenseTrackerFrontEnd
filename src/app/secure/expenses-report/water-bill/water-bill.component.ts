import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ExpensesService } from '../expenses.service';

@Component({
  selector: 'app-water-bill',
  templateUrl: './water-bill.component.html',
  styleUrls: ['./water-bill.component.scss']
})
export class WaterBillComponent implements OnInit {
  p = 1;
  user : any;
  data:any;
  elements: any = [];

  headElements = ['Expenditure Date' ,'Amount', 'Description', 'Action'];
  constructor(private http : HttpClient,
    private router : Router,
    private service : ExpensesService) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');

    this.http.get('http://localhost:8000/waterbill',{
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
      }
      ,
        error => {
          console.log('error'),
          console.log(error)
        }
    )}

    viewUpdateExpenseForm(el:any){
      this.service.currentIndex = this.data.id
      this.router.navigate(['secure/expenses-report/water-bill/water-bill-update/'],
      
      {
        state : {
          data :el
        }
      });
    }

    delete(el : any){
      let prompt = confirm("Are you sure you want to delete this expense?");
      if (prompt == true) {
        this.http.delete('http://localhost:8000/expenses/delete/'+ el.id).subscribe(
          result => {
           
            this.data.splice(this.data.indexOf(el), 1);
          },
          error =>{
            console.log(error)
          }
        )
        
      
      } else {
        this.router.navigate(['secure/expenses-report/water-bill'])
    }
  }

  pageChange(event : any) {
    this.p = event;
  }
}
