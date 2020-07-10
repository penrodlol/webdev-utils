import { Injectable } from '@angular/core';

import { ILink } from '@links/models/link.interface';
import { AddEditLinkComponent } from '@links/components/add-edit-link/add-edit-link.component';
import { LinkDeletionWarningComponent } from '@links/components/link-deletion-warning/link-deletion-warning.component';
import { LinksService } from '@links/services/links.service';

import { DialogService } from '@shared/dialog/services/dialog.service';
import { LinksCollection } from '@shared/types';
import { takeOne } from '@shared/operators';

import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LinkDialogService {

  constructor(
    private linksService: LinksService,
    private dialogService: DialogService
  ) { }

  handleLink(collection: LinksCollection, link?: ILink) {
    this.dialogService.openDialog({
      title: `${!link ? 'Add' : 'Edit'} ${collection.replace(/(^|[\s-])\S/g, (c) => c.toUpperCase())} Link`,
      type: 'general',
      component: AddEditLinkComponent,
      button1: 'Cancel',
      button2: !link ? 'Add' : 'Update',
      disabledStatus: new BehaviorSubject(true),
      sharedData: link
    }).subscribe(response => {
      !link ?
        this.linksService.add(response, collection) :
        this.linksService.update(response, collection);
    })
  }

  deleteLink(collection: LinksCollection, link: ILink) {
    this.linksService.deleteWarning()
      .pipe(takeOne())
      .subscribe((warn: boolean) => {
        if (warn) {
          this.dialogService.openDialog({
            title: `${collection.replace(/(^|[\s-])\S/g, (c) => c.toUpperCase())} Link Removal`,
            type: 'warning',
            component: LinkDeletionWarningComponent,
            button1: 'Cancel',
            button2: 'Delete',
            sharedData: link
          }).subscribe((dontShowAgainStatus: boolean) => {
            if (dontShowAgainStatus) { this.linksService.updateDeleteWarning(false); }
            this.linksService.delete(link, collection);
          });
        } else { this.linksService.delete(link, collection); }
      });
  }

}
