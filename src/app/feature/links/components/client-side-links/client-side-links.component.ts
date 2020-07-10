import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { Links } from '@shared/enums/links.enum';

import { LinksService } from '@links/services/links.service';
import { ILink } from '@links/models/link.interface';
import { LinkDialogService } from '@links/services/link-dialog/link-dialog.service';

@Component({
  selector: 'client-side-links',
  templateUrl: './client-side-links.component.html',
  styleUrls: ['./client-side-links.component.scss'],
  providers: [LinkDialogService]
})
export class ClientSideLinksComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  clientLinks: MatTableDataSource<ILink>;
  isEditingClientLinks = false;

  constructor(
    private linksService: LinksService,
    private linkDialogService: LinkDialogService
  ) { }

  ngAfterViewInit(): void {
    this.linksService.clientSide().subscribe(links => {
      this.clientLinks = new MatTableDataSource(links);
      this.clientLinks.paginator = this.paginator;
    });
  }

  open = (url: string) => !this.isEditingClientLinks ? window.open(url) : null;

  handleClientLink = (link?: ILink) => this.linkDialogService.handleLink(Links.CLIENT_SIDE, link);

  deleteClientLink = (link: ILink) => this.linkDialogService.deleteLink(Links.CLIENT_SIDE, link);

}
