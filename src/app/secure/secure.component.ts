import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {

  user : any;
  btnValue = 'Hide';
  btn = false;


  constructor(private http : HttpClient,
      private router : Router
    ) { }

  ngOnInit(): void {

    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    });

    this.http.get('http://localhost:8000/user', {headers}).subscribe(
      (result)=> this.user = result,
      (error)=> {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      });

      $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
      });
  }
  
  changeBtnValue(){
    if (!this.btn) {
      this.btnValue = 'Show';
      this.btn = true;
  } else {
    this.btnValue = 'Hide';
    this.btn = false;
  }
  }

}
