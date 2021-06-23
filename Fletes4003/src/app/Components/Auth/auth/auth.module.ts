import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { NavbarComponent } from '../pages/navbar/navbar.component';
import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';
import { SignInComponent } from '../pages/sign-in/sign-in.component';
import { FooterComponent } from '../pages/footer/footer.component';
import { ForgotPassComponent } from '../pages/forgot-pass/forgot-pass.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ResetPassComponent } from '../pages/reset-pass/reset-pass.component';


@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    SignInComponent,
    FooterComponent,
    ForgotPassComponent,
    ResetPassComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthModule { }
