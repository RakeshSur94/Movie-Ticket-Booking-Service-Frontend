import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from '../header/header.component';
import { FotterComponent } from '../fotter/fotter.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
