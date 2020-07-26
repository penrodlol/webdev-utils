import { Injectable } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { Breakpoint } from '@shared/types';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@UntilDestroy()
@Injectable({
  providedIn: 'root'
})
export class MediaObserverService {

  constructor(
    private mediaObserver: MediaObserver
  ) { }

  query = (breakpoints: Breakpoint[]): Observable<boolean> => this.mediaObserver
    .asObservable()
    .pipe(
      map(medias => breakpoints.some(breakpoint => breakpoint === medias[0].mqAlias) ? true : false),
      untilDestroyed(this)
    )

}
