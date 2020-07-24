import { Directive, HostListener, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { DialogComponent } from '@shared/dialog/components/dialog/dialog.component';
import { DialogData } from '@shared/dialog/models/dialog.model';

import { filter } from 'rxjs/operators';

@UntilDestroy()
@Directive({
  selector: '[submitDialogOnEnter]'
})
export class SubmitDialogOnEnterDirective {
  private readonly ENTER = 'Enter';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialogRef: MatDialogRef<DialogComponent>
  ) { }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === this.ENTER && this.data.submitOnEnter) {
      this.data
        .disabledStatus
        .pipe(
          filter(status => !status),
          untilDestroyed(this)
        )
        .subscribe(() => this.dialogRef.close(this.data.sharedData != null ? this.data.sharedData : true));
    }
  }

}
