import { Component } from '@angular/core';
import {MainHeader} from './inner-items/main-header/main-header';
import {Options} from './inner-items/options/options';
import {OffersComponent} from './inner-items/offers-component/offers-component';

@Component({
  selector: 'app-home-page',
  imports: [
    MainHeader,
    Options,
    OffersComponent
  ],
  standalone: true,
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

}
