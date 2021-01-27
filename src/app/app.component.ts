import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Exp-Tracker';
  loggedIn = true;

constructor(private route : Router){}
  ngOnInit(){
      this.loggedIn = localStorage.getItem('token') !== null;
      if (!this.loggedIn) {
        this.route.navigate(['']);
      } else {
        this.route.navigate(['secure']);
      }
  }

  logout(){
    localStorage.clear()
    this.loggedIn = false

  }
}
