import { Component, OnInit } from '@angular/core';

import { LinksService } from '@links/services/links.service';
import { Observable } from 'rxjs';
import { ILink } from '@links/models/link.interface';

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

}
