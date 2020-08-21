import { Component } from '@angular/core';

import { MediaObserverService } from '@shared/media-observer/media-observer.service';
import { Breakpoints } from '@shared/enums/breakpoints.enum';

import { LinksService } from '@links/services/links.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-links-page',
  templateUrl: './links-page.component.html',
  styleUrls: ['./links-page.component.scss']
})
export class LinksPageComponent {
  visibleLinks$: Observable<any | unknown> = this.linksService.visibleLinks();
  showTabs$: Observable<boolean> = this.mediaObserverService.query(Breakpoints.LTLG);

  constructor(
    private linksService: LinksService,
    private mediaObserverService: MediaObserverService
  ) { }

}
