import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { Routes, RouterModule } from '@angular/router';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordMatchValidatorDirective } from './components/signup-form/directives/password-match-validator.directive';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginFormComponent },
  { path: 'signup', component: SignupFormComponent },
]

@NgModule({
  declarations: [
    LoginFormComponent,
    SignupFormComponent,
    PasswordMatchValidatorDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
