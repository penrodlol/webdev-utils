import { Directive } from '@angular/core';
import { NG_VALIDATORS, ValidatorFn, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appPasswordMatchValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordMatchValidatorDirective, multi: true}]
})
export class PasswordMatchValidatorDirective {
  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.matchingPasswordValidator()(control);
  }

  matchingPasswordValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const password: string = control.get('password').value;
      const passwordRepeat: string = control.get('passwordRepeat').value;
      return password && passwordRepeat && password !== passwordRepeat ?
        {passwordMismatch: { value: 'Password Mismatch'}} : null;
    };
  }

}
