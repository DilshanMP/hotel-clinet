import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [MatIconModule, RouterLink],
  templateUrl: './main-header.html',
  styleUrls: ['./main-header.scss']
})
export class MainHeader {}
