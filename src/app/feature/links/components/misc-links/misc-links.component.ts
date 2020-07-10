import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Links } from '@shared/enums/links.enum';

import { LinksService } from '@links/services/links.service';
import { ILink } from '@links/models/link.interface';
import { LinkDialogService } from '@links/services/link-dialog/link-dialog.service';

@Component({
  selector: 'misc-links',
  templateUrl: './misc-links.component.html',
  styleUrls: ['./misc-links.component.scss'],
  providers: [LinkDialogService]
})
export class MiscLinksComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  miscLinks: MatTableDataSource<ILink>;
  isEditingMiscLinks = false;

  constructor(
    private linksService: LinksService,
    private linkDialogService: LinkDialogService
  ) { }

  ngAfterViewInit(): void {
    this.linksService.misc().subscribe(links => {
      this.miscLinks = new MatTableDataSource(links);
      this.miscLinks.paginator = this.paginator;
    });
  }

  open = (url: string) => !this.isEditingMiscLinks ? window.open(url) : null;

  handleMiscLink = (link?: ILink) => this.linkDialogService.handleLink(Links.MISC, link);

  deleteMiscLink = (link: ILink) => this.linkDialogService.deleteLink(Links.MISC, link);

}
