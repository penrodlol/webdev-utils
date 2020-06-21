import { TestBed } from '@angular/core/testing';

import { SessionStorageRemovalService } from './session-storage-removal.service';

describe('SessionStorageRemovalService', () => {
  let service: SessionStorageRemovalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionStorageRemovalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
