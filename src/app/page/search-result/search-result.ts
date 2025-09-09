import { Component } from '@angular/core';
import {HotelCard} from './inner/hotel-card/hotel-card';
import {StaysFormComponent} from '../home-page/inner-items/stays-form-component/stays-form-component';

@Component({
  selector: 'app-search-result',
  imports: [
    HotelCard,
    StaysFormComponent
  ],
  standalone:true,
  templateUrl: './search-result.html',
  styleUrl: './search-result.scss'
})
export class SearchResult {

}
