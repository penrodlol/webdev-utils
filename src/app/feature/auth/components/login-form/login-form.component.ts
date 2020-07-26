import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

import { IAuthUserState } from '@shared/state/auth/auth-user.state';
import { MediaObserverService } from '@shared/media-observer/media-observer.service';
import { Breakpoints } from '@shared/enums/breakpoints.enum';

import { AuthUserActions } from '@auth/actions';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  expandGoogleLogin$: Observable<boolean> = this.mediaObserverService.query([Breakpoints.XS]);

  loginForm: FormGroup;
  passwordHidden = true;

  constructor(
    private store: Store<IAuthUserState>,
    private fb: FormBuilder,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private mediaObserverService: MediaObserverService
  ) {
    const googleSvgUrl = 'https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg';
    this.matIconRegistry.addSvgIcon('google-logo', this.domSanitizer.bypassSecurityTrustResourceUrl(googleSvgUrl));
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: this.fb.control(null, [Validators.required, Validators.email]),
      password: this.fb.control(null, Validators.required)
    });
  }

  googleLogin = () => this.store.dispatch(AuthUserActions.login());

  standardLogin = () => this.store.dispatch(AuthUserActions.login(
    this.loginForm.get('email').value,
    this.loginForm.get('password').value
  ))
}
