import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  elements: any = [
    // { user: 'Photo:', value: '', action: ''},
    { user: 'Name:', value: 'Eva Rain Ramirez'},
    { user: 'Email:', value: 'eva-rain@gmail.com'},
    { user: 'Password:', value: '******'}
  ];
  update = false;
  
  headElements = 'Photo';

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  goToUpdate(){
      this.update = true;
  }
}
