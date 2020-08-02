import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@external/material.module';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { PasswordMatchValidatorDirective } from './components/signup-form/directives/password-match-validator.directive';
import { ProfileImageUploadComponent } from './components/profile-image-upload/profile-image-upload.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginFormComponent },
  { path: 'signup', component: SignupFormComponent },
];

@NgModule({
  declarations: [
    LoginFormComponent,
    SignupFormComponent,
    PasswordMatchValidatorDirective,
    ProfileImageUploadComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
