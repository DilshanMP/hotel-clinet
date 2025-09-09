import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {ProfileSettings} from './inner/profile-settings/profile-settings';
import {History} from './inner/history/history';


@Component({
  selector: 'app-settings',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,

    MatTabGroup,
    MatTab,
    ProfileSettings,
    History
  ],
  standalone:true,
  templateUrl: './settings.html',
  styleUrl: './settings.scss'
})
export class Settings {

}
