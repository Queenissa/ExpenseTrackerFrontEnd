import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Exp-Tracker';
  loggedIn = true;
  user: any;
constructor(private router : Router,
  private http : HttpClient){}
  ngOnInit(){
          const headers = new HttpHeaders({
            'Authorization' : `Bearer ${localStorage.getItem('token')}`
          });
      this.loggedIn = localStorage.getItem('token') !== null;
      if (!this.loggedIn) {
        this.router.navigate(['']);
      } else {
        this.http.get('http://localhost:8000/user', {headers}).subscribe(
        (result)=> {
          localStorage.setItem('user',JSON.stringify(result))
          this.user = result;
          if(this.user.is_admin == 1){
            this.router.navigate(['admin'])
          }else if(this.user.is_admin == 0 || this.user.is_admin == null){
            this.router.navigate(['secure'])
          }
        },
        (error)=> {
          localStorage.removeItem('token');
          this.router.navigate(['/login']);
        });
      }
  }

  logout(){
    localStorage.clear()
    this.loggedIn = false

  }
}
