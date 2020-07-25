import { TestBed } from '@angular/core/testing';

import { MediaObserverService } from './media-observer.service';

describe('MediaObserverService', () => {
  let service: MediaObserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaObserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
