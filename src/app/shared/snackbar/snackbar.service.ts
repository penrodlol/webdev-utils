import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  readonly BASE_DURATION = 3000;

  constructor(private snackbar: MatSnackBar) { }

  triggerSnackBar(message: string, action: string = null, duration: number = this.BASE_DURATION) {
    this.snackbar.open(message, action, {
      duration,
      verticalPosition: 'top'
    });
  }
}
