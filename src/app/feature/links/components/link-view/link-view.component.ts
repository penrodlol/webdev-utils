import { Component, OnInit } from '@angular/core';

import { LinksService } from '@links/services/links.service';
import { ILink } from '@links/models/link.interface';

import { Observable } from 'rxjs';

@Component({
  selector: 'link-view',
  templateUrl: './link-view.component.html',
  styleUrls: ['./link-view.component.scss']
})
export class LinkViewComponent implements OnInit {
  selectedLink$: Observable<ILink> = this.linksService.linkInContext;

  constructor(
    private linksService: LinksService
  ) { }

  ngOnInit(): void {
  }

}
