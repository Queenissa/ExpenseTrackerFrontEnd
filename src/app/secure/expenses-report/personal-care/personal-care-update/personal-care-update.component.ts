import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personal-care-update',
  templateUrl: './personal-care-update.component.html',
  styleUrls: ['./personal-care-update.component.scss']
})
export class PersonalCareUpdateComponent implements OnInit {

  formUpdate : FormGroup;
  toUpdateData : any;
  user : any;
  types = [
    'Clothing', 'Electricity', 'Food', 'Personal','Phone', 'Savings', 'Transportation', 'Water', ''
  ]
  constructor(private router : Router,
    private fb : FormBuilder,
    private http : HttpClient) { }

  ngOnInit(): void {
    this.toUpdateData = history.state.data;
    this.formUpdate = this.fb.group({
      expense_category : '',
      expense_amount : '',
      note : '',
      expense_date : ''
    });
  }



  update(){
    const formData = this.formUpdate.getRawValue();
    this.user = localStorage.getItem('user');
    console.log('This is form raw data', formData);
  

    formData.user_id = JSON.parse(this.user).id
    this.http.put('http://localhost:8000/expenses/update/' + this.toUpdateData.id , formData).subscribe(
      (result: any)  => {
      
        console.log(result)
        "User Pass"
        alert('Expense successfully updated')
        this.router.navigate(['secure/expenses-report/clothing'])
      },
      error => {
        console.log('error')
        console.log(error);
        
      }
    );
  }

}
