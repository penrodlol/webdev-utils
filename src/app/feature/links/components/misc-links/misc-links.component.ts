import { Component, OnInit } from '@angular/core';

import { LinksService } from '@links/services/links.service';
import { ILink } from '@links/models/link.interface';

import { Observable } from 'rxjs';

@Component({
  selector: 'misc-links',
  templateUrl: './misc-links.component.html',
  styleUrls: ['./misc-links.component.scss']
})
export class MiscLinksComponent implements OnInit {
  misc$: Observable<ILink[] | unknown> = this.linksService.misc();

  constructor(
    private linksService: LinksService
  ) { }

  ngOnInit(): void {
  }

  open = (url: string) => window.open(url);

}
