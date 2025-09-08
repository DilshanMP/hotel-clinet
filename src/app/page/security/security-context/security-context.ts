import { Component } from '@angular/core';
import {Login} from '../login/login';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-security-context',
  imports: [

    RouterOutlet
  ],
  standalone:true,
  templateUrl: './security-context.html',
  styleUrl: './security-context.scss'
})
export class SecurityContext {

}
