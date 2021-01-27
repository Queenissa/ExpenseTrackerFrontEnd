import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form : FormGroup;

  constructor(private fb : FormBuilder,
    private http : HttpClient
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      first_name : ['', Validators.required],
      last_name : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      password : ['', Validators.required],
      password_confirmation : ['', Validators.required],

    });
  }

  submit(){
    const formData = this.form.getRawValue();

    this.http.post('http://localhost:8000/register', formData).subscribe(
      (result)=> console.log(result),
      (error)=>console.log(error)
    );
  }

}
