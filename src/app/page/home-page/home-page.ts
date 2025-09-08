import { Component } from '@angular/core';
import {MainHeader} from '../../components/main-header/main-header';
import {Options} from './inner-items/options/options';
import {OffersComponent} from './inner-items/offers-component/offers-component';
import {HomeTrendingDestinataion} from './inner-items/home-trending-destination/home-trending-destinataion';

@Component({
  selector: 'app-home-page',
  imports: [
    Options,
    OffersComponent,
    HomeTrendingDestinataion
  ],
  standalone: true,
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

}
