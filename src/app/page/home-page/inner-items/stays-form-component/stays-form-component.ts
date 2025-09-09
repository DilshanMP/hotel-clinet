import { Component } from '@angular/core';

import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-stays-form-component',
  imports: [
    MatTabsModule,
    MatIconModule,
    MatMenuModule,
    RouterLink,

  ],
  standalone: true,
  templateUrl: './stays-form-component.html',
  styleUrl: './stays-form-component.scss'
})
export class StaysFormComponent {

}
