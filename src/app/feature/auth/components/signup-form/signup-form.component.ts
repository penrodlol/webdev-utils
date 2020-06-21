import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { IAuthUserState } from '@shared/state/auth/auth-user.state';

import { AuthUserActions } from '@auth/actions';

import { Store } from '@ngrx/store';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  signupForm: FormGroup;
  passwordHidden = true;

  constructor(
    private store: Store<IAuthUserState>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: this.fb.control(null, [Validators.required, Validators.email]),
      displayName: this.fb.control(null),
      password: this.fb.control(null, Validators.required),
      passwordRepeat: this.fb.control(null, Validators.required)
    });
  }

  sendEmailVerification() {
    this.store.dispatch(AuthUserActions.signup(
      this.signupForm.get('email').value,
      this.signupForm.get('displayName').value,
      this.signupForm.get('password').value
    ));
  }

}
