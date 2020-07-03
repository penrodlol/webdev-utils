import { Component, OnInit } from '@angular/core';

import { LinksService } from '@links/services/links.service';
import { ILink } from '@links/models/link.interface';

import { Observable } from 'rxjs';

@Component({
  selector: 'client-side-links',
  templateUrl: './client-side-links.component.html',
  styleUrls: ['./client-side-links.component.scss']
})
export class ClientSideLinksComponent implements OnInit {
  clientSide$: Observable<ILink[] | unknown> = this.linksService.clientSide();

  constructor(
    private linksService: LinksService
  ) { }

  ngOnInit(): void { }

  open = (url: string) => window.open(url);

}
