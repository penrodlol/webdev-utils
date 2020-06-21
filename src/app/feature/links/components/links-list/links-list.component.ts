import { Component, OnInit } from '@angular/core';

import { LinksService } from '@links/services/links.service';
import { ILink } from '@links/models/link.interface';
import { ILinkListNode } from '@links/models/link-list-node.interface';

import { Observable } from 'rxjs';

@Component({
  selector: 'links-list',
  templateUrl: './links-list.component.html',
  styleUrls: ['./links-list.component.scss']
})
export class LinksListComponent implements OnInit {
  links$: Observable<ILinkListNode[] | unknown> = this.linksService.links();

  constructor(
    private linksService: LinksService
  ) { }

  ngOnInit(): void { }

  selectLink = (link: ILink) => this.linksService.selectLink(link);

}
