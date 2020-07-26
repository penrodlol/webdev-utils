import { Component } from '@angular/core';

import { MediaObserverService } from '@shared/media-observer/media-observer.service';
import { Breakpoints } from '@shared/enums/breakpoints.enum';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  isSmaller$: Observable<boolean> = this.mediaObserverService.query([Breakpoints.XS, Breakpoints.SM]);

  constructor(
    private mediaObserverService: MediaObserverService
  ) { }

}
