import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.scss']
})
export class ProfileUpdateComponent implements OnInit {

  updateForm : FormGroup;

  constructor(private fb : FormBuilder
    ) { }

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      first_name : ['', Validators.required],
      last_name : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      password : ['', Validators.required],
      password_confirmation : ['', Validators.required],

    });
  }

}
