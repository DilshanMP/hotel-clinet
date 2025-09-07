import { Component } from '@angular/core';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-options',
  imports: [
    MatTabGroup,
    MatTab,
    MatIconModule
  ],
  standalone: true,
  templateUrl: './options.html',
  styleUrl: './options.scss'
})
export class Options {

}
