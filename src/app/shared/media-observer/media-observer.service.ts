import { Injectable } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { Breakpoint } from '@shared/types';

import { map, distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs';

@UntilDestroy()
@Injectable({
  providedIn: 'root'
})
export class MediaObserverService {

  constructor(
    private mediaObserver: MediaObserver
  ) { }

  query = (breakpoint: Breakpoint): Observable<boolean> => this.mediaObserver
      .asObservable()
      .pipe(
        map(() => this.mediaObserver.isActive(breakpoint)),
        distinctUntilChanged(),
        untilDestroyed(this)
      )
}
