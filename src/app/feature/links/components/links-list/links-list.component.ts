import { Component, OnInit } from '@angular/core';

import { LinksService } from '@links/services/links.service';
import { ILink } from '@links/models/link.interface';
import { ILinkListNode } from '@links/models/link-list-node.interface';
import { LinksConfigurationComponent } from '@links/components/links-configuration/links-configuration.component';

import { DialogService } from '@shared/dialog/services/dialog.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'links-list',
  templateUrl: './links-list.component.html',
  styleUrls: ['./links-list.component.scss']
})
export class LinksListComponent implements OnInit {
  links$: Observable<ILinkListNode[] | unknown> = this.linksService.links();

  constructor(
    private linksService: LinksService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void { }

  selectLink = (link: ILink) => this.linksService.selectLink(link);

  showSettings() {
    this.dialogService.openDialog({
      title: 'Links Configuration',
      component: LinksConfigurationComponent
    });
  }

}
