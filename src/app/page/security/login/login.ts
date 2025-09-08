import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckbox} from '@angular/material/checkbox';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckbox,
    FormsModule,
    RouterLink
  ],
  standalone:true,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
 showStatus:boolean=true;
}
