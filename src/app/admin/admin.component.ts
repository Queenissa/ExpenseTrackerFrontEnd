import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  // is_admin = false;
  // user : any;


  constructor(private http : HttpClient,
      private router : Router
    ) { }

  ngOnInit(): void {}

  logout(){
    localStorage.clear()
    this.router.navigate(['public'])

  }
}
