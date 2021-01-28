import { ExpensesService } from './../../secure/expenses-report/expenses.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.scss']
})
export class ViewTableComponent implements OnInit {

  user : any;
  data:any;

  elements: any = [
    { id: 0, first_name: '', last_name: '', email: '' }
  ];

  headElements = ['User Id', 'First Name', 'Last Name', 'Email', 'Action'];
  
  constructor( private http : HttpClient,
    private services : ExpensesService,
    private router : Router) { }

  ngOnInit(): void {

    this.user = localStorage.getItem('user');

    this.http.get('http://localhost:8000/allUsers',{
      headers :{
        Authorization : `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      (result)=> {
        this.elements = result;
        
      }
      ,
       error  => {
          console.log('error'),
          console.log(error)
        }
    )}

    viewThis(el : any){
      this.services.currentIndex = this.elements.id
      this.router.navigate(['admin/viewUser'],
      
      {
        state : {
          data :el
        }
      });
    }

    delete(el : any){
      let prompt = confirm("Are you sure you want to delete this expense?");
      if (prompt == true) {
        this.http.delete('http://localhost:8000/user/delete/'+ el.id).subscribe(
          result => {
           
            this.elements.splice(this.elements.indexOf(el), 1);
          },
          error =>{
            console.log(error)
          }
        )
        
      
      } else {
        this.router.navigate(['admin'])
    }
    }

}
