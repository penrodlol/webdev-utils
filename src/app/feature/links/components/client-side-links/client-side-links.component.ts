import { Component, OnInit } from '@angular/core';

import { DialogService } from '@shared/dialog/services/dialog.service';
import { Links } from '@shared/enums/links.enum';

import { LinksService } from '@links/services/links.service';
import { ILink } from '@links/models/link.interface';
import { AddLinkComponent } from '@links/components/add-link/add-link.component';

import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'client-side-links',
  templateUrl: './client-side-links.component.html',
  styleUrls: ['./client-side-links.component.scss']
})
export class ClientSideLinksComponent implements OnInit {
  clientSide$: Observable<ILink[] | unknown> = this.linksService.clientSide();

  constructor(
    private linksService: LinksService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void { }

  open = (url: string) => window.open(url);

  addClientLink() {
    this.dialogService.openDialog({
      title: 'Add Client-Side Link',
      type: 'general',
      component: AddLinkComponent,
      button1: 'Cancel',
      button2: 'Add',
      disabledStatus: new BehaviorSubject(true)
    }).subscribe(link => this.linksService.addLink(link, Links.CLIENT_SIDE));
  }

}
