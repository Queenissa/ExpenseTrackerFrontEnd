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
  user : any
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
      client_secret : 'FvXHEAeMvYwmRl2rFfqgy1Fvxa0vCJ9ZsTgUcndo',
      scope : '*'
    };
    this.http.post( 'http://localhost:8000/oauth/token', data).subscribe(
        (result:any)  => {
          localStorage.setItem('token', result.access_token);
          const headers = new HttpHeaders({
            'Authorization' : `Bearer ${localStorage.getItem('token')}`
          });
      
          this.http.get('http://localhost:8000/user', {headers}).subscribe(
            (result)=> {
              localStorage.setItem('user',JSON.stringify(result))
              this.user = result
              if(this.user.is_admin == 1){
                this.router.navigate(['admin'])
              }else if(this.user.is_admin == 0 || this.user.is_admin == null){
                this.router.navigate(['secure'])
              }else{
                this.router.navigate([''])
              }
            },
            (error)=> {
              localStorage.removeItem('token');
              this.router.navigate(['/login']);
            });
          alert("Welcome to Expenses Tracker Application!")
        },
        error => {
          alert("Credentials not found! Please register first!")
          this.router.navigate(['/public/register']);
        }
        )
        
  }

}
