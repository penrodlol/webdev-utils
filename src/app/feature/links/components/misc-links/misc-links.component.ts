import { Component, OnInit } from '@angular/core';
import { LinksService } from '@links/services/links.service';
import { Observable } from 'rxjs';
import { ILink } from '@links/models/link.interface';

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

}
