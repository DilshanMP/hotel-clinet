import { Routes } from '@angular/router';
import {HomePage} from './page/home-page/home-page';
import {NotfoundPage} from './page/not-found-page/notfound-page';
import {SecurityContext} from './page/security/security-context/security-context';
import {Login} from './page/security/login/login';
import {Register} from './page/security/register/register';
import {RegisterVerification} from './page/security/register-verification/register-verification';
import {ForgotPassword} from './page/security/forgot-password/forgot-password';

export const routes: Routes = [
  {path : '', redirectTo:'/home' ,pathMatch:"full" },
  {path : 'home', component:HomePage},
  {path : 'security', component:SecurityContext ,children:[
      {path : '', redirectTo:'/security/login' ,pathMatch:"full" },
      {path : 'login', component:Login},
      {path : 'register', component:Register},
      {path : 'forgot-password', component:ForgotPassword},
      {path : 'register-verification/:email', component:RegisterVerification},
    ]},
  {path : '**', component:NotfoundPage},
];
