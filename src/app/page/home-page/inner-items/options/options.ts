import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import {StaysContextComponent} from '../stays-context-component/stays-context-component';


@Component({
  selector: 'app-options',
  imports: [
    MatTabsModule,
    MatIconModule,
    StaysContextComponent

  ],
  standalone: true,
  templateUrl: './options.html',
  styleUrl: './options.scss'
})
export class Options {

}
