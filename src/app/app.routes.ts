import { Routes } from '@angular/router';
import {HomePage} from './page/home-page/home-page';
import {NotfoundPage} from './page/not-found-page/notfound-page';
import {SecurityContext} from './page/security/security-context/security-context';
import {Login} from './page/security/login/login';
import {Register} from './page/security/register/register';
import {RegisterVerification} from './page/security/register-verification/register-verification';
import {ForgotPassword} from './page/security/forgot-password/forgot-password';
import {ResetPwdVerification} from './page/security/reset-pwd-verification/reset-pwd-verification';
import {ResetPwd} from './page/security/reset-pwd/reset-pwd';
import {Settings} from './page/settings/settings';
import {SearchResult} from './page/search-result/search-result';

export const routes: Routes = [
  {path : '', redirectTo:'/home' ,pathMatch:"full" },
  {path : 'home', component:HomePage},
  {path : 'security', component:SecurityContext ,children:[
      {path : '', redirectTo:'/security/login' ,pathMatch:"full" },
      {path : 'login', component:Login},
      {path : 'register', component:Register},
      {path : 'forgot-password', component:ForgotPassword},
      {path : 'register-verification/:email', component:RegisterVerification},
      {path : 'reset-pwd-verification/:email', component:ResetPwdVerification},
      {path : 'reset-pwd', component:ResetPwd}

    ]},
  {path : 'settings', component:Settings},
  {path : 'search', component:SearchResult},
  {path : '**', component:NotfoundPage},
];
