import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private snackbar: MatSnackBar
  ) { }

  triggerSnackBar(message: string, action?: 'Dismiss' | 'Ok', duration?: number) {
    this.snackbar.open(
      message,
      action,
      {
        duration: duration ? duration : 3000,
        verticalPosition: 'top',
        panelClass: [
          'snackbar',
          `snackbar_action-${!!action}`
        ]
      }
    );
  }
}
