import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogComponent } from '@shared/dialog/components/dialog/dialog.component';
import { DialogData } from '@shared/dialog/models/dialog.model';
import { takeOne } from '@shared/operators';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  openDialog(data: DialogData): Observable<any> {
    return this.dialog.open(DialogComponent, {
      minWidth: '30vw',
      maxWidth: '50vw',
      height: 'auto',
      maxHeight: '50vh',
      backdropClass: 'dialog-backdrop',
      position: { top: '50px' },
      data
    }).afterClosed().pipe(
      tap(() => data.disabledStatus?.complete()),
      takeOne()
    );
  }
}
