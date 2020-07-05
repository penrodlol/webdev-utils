import { Component, OnInit } from '@angular/core';

import { DialogService } from '@shared/dialog/services/dialog.service';
import { Links } from '@shared/enums/links.enum';

import { LinksService } from '@links/services/links.service';
import { ILink } from '@links/models/link.interface';
import { AddLinkComponent } from '@links/components/add-link/add-link.component';

import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'misc-links',
  templateUrl: './misc-links.component.html',
  styleUrls: ['./misc-links.component.scss']
})
export class MiscLinksComponent implements OnInit {
  misc$: Observable<ILink[] | unknown> = this.linksService.misc();

  isEditingMiscLinks = false;

  constructor(
    private linksService: LinksService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
  }

  open = (url: string) => !this.isEditingMiscLinks ? window.open(url) : null;

  addMiscLink() {
    this.dialogService.openDialog({
      title: 'New Misc Link',
      type: 'general',
      component: AddLinkComponent,
      button1: 'Cancel',
      button2: 'Add',
      disabledStatus: new BehaviorSubject(true)
    }).subscribe(link => this.linksService.addLink(link, Links.MISC));
  }

}
