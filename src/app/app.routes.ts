import { Routes } from '@angular/router';
import {HomePage} from './page/home-page/home-page';
import {NotfoundPage} from './page/not-found-page/notfound-page';

export const routes: Routes = [
  {path : '', redirectTo:'/home' ,pathMatch:"full" },
  {path : 'home', component:HomePage},
  {path : '**', component:NotfoundPage},
];
