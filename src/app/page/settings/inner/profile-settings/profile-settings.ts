import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule} from '@angular/material/button';

import { MatInputModule} from '@angular/material/input';
import {RouterLink} from '@angular/router';
import {ProfilePic} from '../profile-pic/profile-pic';

@Component({
  selector: 'app-profile-settings',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    RouterLink,
    ProfilePic
  ],
  standalone:true,
  templateUrl: './profile-settings.html',
  styleUrl: './profile-settings.scss'
})
export class ProfileSettings {

}
