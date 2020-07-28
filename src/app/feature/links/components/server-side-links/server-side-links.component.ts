import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { Links } from '@shared/enums/links.enum';

import { LinksService } from '@links/services/links.service';
import { ILink } from '@links/models/link.interface';
import { LinkDialogService } from '@links/services/link-dialog/link-dialog.service';

@Component({
  selector: 'server-side-links',
  templateUrl: './server-side-links.component.html',
  styleUrls: ['./server-side-links.component.scss'],
  providers: [LinkDialogService]
})
export class ServerSideLinksComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  serverLinks: MatTableDataSource<ILink>;
  isEditingServerLinks = false;
  isLoading = true;

  constructor(
    private linksService: LinksService,
    private linkDialogService: LinkDialogService
  ) { }

  ngAfterViewInit(): void {
    this.linksService.serverSide().subscribe(links => {
      this.serverLinks = new MatTableDataSource(links);
      this.serverLinks.paginator = this.paginator;
      this.isLoading = false;
    });
  }

  open = (url: string) => !this.isEditingServerLinks ? window.open(url) : null;

  handleServerLink = (link?: ILink) => this.linkDialogService.handleLink(Links.SERVER_SIDE, link);

  deleteServerLink = (link: ILink) => this.linkDialogService.deleteLink(Links.SERVER_SIDE, link);

  filter = (value: string) => this.serverLinks.filter = value;

}
