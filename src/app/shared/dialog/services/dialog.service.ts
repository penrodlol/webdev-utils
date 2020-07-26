import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogComponent } from '@shared/dialog/components/dialog/dialog.component';
import { DialogData } from '@shared/dialog/models/dialog.model';
import { takeOne } from '@shared/operators';
import { MediaObserverService } from '@shared/media-observer/media-observer.service';
import { Breakpoints } from '@shared/enums/breakpoints.enum';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  adjustDialogWidth: boolean;

  constructor(
    public dialog: MatDialog,
    private mediaObserverSevice: MediaObserverService
  ) {
    this.mediaObserverSevice
      .query([Breakpoints.XS, Breakpoints.SM])
      .subscribe(breakpointMatched => this.adjustDialogWidth = breakpointMatched);
  }

  openDialog(data: DialogData, disabledClose: boolean = false): Observable<any> {
    return this.dialog.open(DialogComponent, {
      minWidth: this.adjustDialogWidth ? '80vw' : '30vw',
      maxWidth: this.adjustDialogWidth ? '90vw' : '80vw',
      height: 'auto',
      maxHeight: '50vh',
      backdropClass: 'dialog-backdrop',
      position: { top: '50px' },
      disableClose: disabledClose,
      data
    }).afterClosed().pipe(
      tap(() => data.disabledStatus?.complete()),
      takeOne()
    );
  }
}
