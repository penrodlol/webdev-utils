import { Component, OnInit } from '@angular/core';

import { LinksService } from '@links/services/links.service';
import { ILink } from '@links/models/link.interface';

import { Observable } from 'rxjs';

@Component({
  selector: 'server-side-links',
  templateUrl: './server-side-links.component.html',
  styleUrls: ['./server-side-links.component.scss']
})
export class ServerSideLinksComponent implements OnInit {
  serverSide$: Observable<ILink[] | unknown> = this.linksService.serverSide();

  constructor(
    private linksService: LinksService
  ) { }

  ngOnInit(): void {
  }

  open = (url: string) => window.open(url);

}