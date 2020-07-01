import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { DialogData } from '@shared/dialog/models/dialog.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialog: MatDialogRef<any>
  ) { }

  dismiss = () => this.dialog.close();

}
