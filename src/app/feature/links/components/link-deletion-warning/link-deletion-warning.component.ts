import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogData } from '@shared/dialog/models/dialog.model';

import { ILink } from '@links/models/link.interface';

@Component({
  selector: 'app-link-deletion-warning',
  templateUrl: './link-deletion-warning.component.html',
  styleUrls: ['./link-deletion-warning.component.scss']
})
export class LinkDeletionWarningComponent {
  link: ILink = this.data.sharedData;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.data.sharedData = false;
  }

  handleDontShowAgain = (status: boolean) => this.data.sharedData = status;

}
