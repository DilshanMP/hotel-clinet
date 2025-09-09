import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-reset-pwd',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    RouterLink
  ],
  standalone:true,
  templateUrl: './reset-pwd.html',
  styleUrl: './reset-pwd.scss'
})
export class ResetPwd {

}
