import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ActivatedRoute, RouterLink} from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-register-verification',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    RouterLink
  ],
  standalone:true,
  templateUrl: './register-verification.html',
  styleUrl: './register-verification.scss'
})
export class RegisterVerification implements OnInit{
  email:any;
  constructor(private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  this.activateRoute.paramMap.subscribe(resp=>{
    this.email = resp.get('email');
  })
  }
}
