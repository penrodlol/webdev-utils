import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IAuthUserState } from '@feature/auth/state/auth-user.state';
import { AuthUserActions } from '@feature/auth/actions';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup
  passwordHidden = true;

  constructor(
    private store: Store<IAuthUserState>,
    private fb: FormBuilder,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    const googleSvgUrl = 'https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg';
    this.matIconRegistry.addSvgIcon('google-logo', this.domSanitizer.bypassSecurityTrustResourceUrl(googleSvgUrl));
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: this.fb.control(null, [Validators.required, Validators.email]),
      password: this.fb.control(null, Validators.required)
    })
  }

  googleLogin = () => this.store.dispatch(AuthUserActions.login());

  standardLogin = () => this.store.dispatch(AuthUserActions.login(
    this.loginForm.get('email').value,
    this.loginForm.get('password').value
  ));
}
