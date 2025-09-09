import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule} from '@angular/material/button';

import {MatInputModule} from '@angular/material/input';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-reset-pwd-verification',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    RouterLink
  ],
  standalone:true,
  templateUrl: './reset-pwd-verification.html',
  styleUrl: './reset-pwd-verification.scss'
})
export class ResetPwdVerification {

}
