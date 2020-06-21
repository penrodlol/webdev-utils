import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogComponent } from '@shared/dialog/components/dialog/dialog.component';
import { DialogData } from '@shared/dialog/models/dialog.model';

import { Observable } from 'rxjs';

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
