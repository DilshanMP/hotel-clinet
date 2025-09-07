import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './main-header.html',
  styleUrls: ['./main-header.scss']
})
export class MainHeader {}
