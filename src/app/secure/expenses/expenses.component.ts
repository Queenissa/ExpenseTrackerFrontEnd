import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  form : FormGroup;
  user :any

  constructor(private fb : FormBuilder,
    private http : HttpClient,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      expense_amount : ['', Validators.required],
      note : ['', Validators.required],
      expense_date : ['', Validators.required],
      expense_category : ['', Validators.required]
    });
  }

  submit(){
    const formData = this.form.getRawValue();
    console.log(formData);
    this.user = localStorage.getItem('user');
    
    formData.user_id = JSON.parse(this.user).id
    
    this.http.post('http://localhost:8000/expenses/add', formData).subscribe(
      (result: any)  => {
        console.log(result)
        "User Pass"
        // localStorage.setItem('token', result.access_token);
        this.router.navigate(["secure"])
      },
      error => {
        console.log('error')
        console.log(error);
        
      }
    );
  }

}
