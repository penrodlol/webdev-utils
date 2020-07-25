import { Component, OnInit } from '@angular/core';

import { MediaObserverService } from '@shared/media-observer/media-observer.service';
import { Breakpoints } from '@shared/enums/breakpoints.enum';

import { LinksService } from '@links/services/links.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-links-page',
  templateUrl: './links-page.component.html',
  styleUrls: ['./links-page.component.scss'],
  providers: [MediaObserverService]
})
export class LinksPageComponent implements OnInit {
  visibleLinks$: Observable<any | unknown> = this.linksService.visibleLinks();
  showTabs$: Observable<boolean> = this.mediaObserverService.query([Breakpoints.XS, Breakpoints.SM, Breakpoints.MD]);

  constructor(
    private linksService: LinksService,
    private mediaObserverService: MediaObserverService
  ) { }


  ngOnInit(): void { }

}
