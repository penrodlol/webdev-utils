import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { Routes, RouterModule } from '@angular/router';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';

const routes: Routes = [
  { path: '', component: LoginPageComponent }
]

@NgModule({
  declarations: [
    LoginFormComponent,
    LoginPageComponent,
    SignupFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule { }
