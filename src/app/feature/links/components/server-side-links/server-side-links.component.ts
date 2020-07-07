import { Component, OnInit } from '@angular/core';

import { DialogService } from '@shared/dialog/services/dialog.service';
import { Links } from '@shared/enums/links.enum';
import { takeOne } from '@shared/operators';

import { LinksService } from '@links/services/links.service';
import { ILink } from '@links/models/link.interface';
import { AddEditLinkComponent } from '@links/components/add-edit-link/add-edit-link.component';
import { LinkDeletionWarningComponent } from '@links/components/link-deletion-warning/link-deletion-warning.component';

import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'server-side-links',
  templateUrl: './server-side-links.component.html',
  styleUrls: ['./server-side-links.component.scss']
})
export class ServerSideLinksComponent implements OnInit {
  serverSide$: Observable<ILink[] | unknown> = this.linksService.serverSide();

  isEditingServerLinks = false;

  constructor(
    private linksService: LinksService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
  }

  open = (url: string) => !this.isEditingServerLinks ? window.open(url) : null;

  toggleServerLink(link?: ILink) {
    this.dialogService.openDialog({
      title: `${!link ? 'Add' : 'Edit'} Server-Side Link`,
      type: 'general',
      component: AddEditLinkComponent,
      button1: 'Cancel',
      button2: !link ? 'Add' : 'Update',
      disabledStatus: new BehaviorSubject(true),
      sharedData: link
    }, true).subscribe(response => {
      !link ?
        this.linksService.add(response, Links.SERVER_SIDE) :
        this.linksService.update(response, Links.SERVER_SIDE);
    })
  }

  deleteServerLink(link: ILink) {
    this.linksService.deleteWarning()
    .pipe(takeOne())
    .subscribe((warn: boolean) => {
      if (warn) {
        this.dialogService.openDialog({
          title: 'Server-Side Link Removal',
          type: 'warning',
          component: LinkDeletionWarningComponent,
          button1: 'Cancel',
          button2: 'Delete',
          sharedData: link
        }).subscribe((dontShowAgainStatus: boolean) => {
          if (dontShowAgainStatus) { this.linksService.updateDeleteWarning(false); }
          this.linksService.delete(link, Links.SERVER_SIDE);
        })
      } else { this.linksService.delete(link, Links.SERVER_SIDE); }
    })
  }

}
