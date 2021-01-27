import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form : FormGroup;
  constructor( 
    private fb : FormBuilder,
    private http : HttpClient,
    private router : Router
    ) {  }

  ngOnInit(): void {

    this.form = this.fb.group({
      email : '',
      password : ''
    });
  }

  submit(){
    const formData = this.form.getRawValue();
    const data = {
      username : formData.email,
      password : formData.password,
      grant_type : 'password',
      client_id : 2,
      client_secret : 'Tv4digWNq4fHUDcpLD5Cn1UiZI4JacNirG2V6eS6',
      scope : '*'
    };
    this.http.post( 'http://localhost:8000/oauth/token', data).subscribe(
        (result: any)  => {
          localStorage.setItem('token', result.access_token);
          const headers = new HttpHeaders({
            'Authorization' : `Bearer ${localStorage.getItem('token')}`
          });
      
          this.http.get('http://localhost:8000/user', {headers}).subscribe(
            (result)=> localStorage.setItem('user',JSON.stringify(result)),
            (error)=> {
              localStorage.removeItem('token');
              this.router.navigate(['/login']);
            });
          
          this.router.navigate(["secure"])
        },
        error => {
          console.log('error'),
          console.log(error);
          
        }
    )
    
  }

}
