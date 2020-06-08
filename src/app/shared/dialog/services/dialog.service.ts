import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable } from 'rxjs';

import { DialogComponent } from '../components/dialog/dialog.component';
import { DialogData } from '../models/dialog.model';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  openDialog(data: DialogData): Observable<any> {
    return this.dialog.open(DialogComponent, {
      width: '600px',
      position: { top: '50px' },
      data
    }).afterClosed();
  }
}
