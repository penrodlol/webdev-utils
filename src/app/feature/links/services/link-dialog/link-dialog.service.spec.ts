import { TestBed } from '@angular/core/testing';

import { LinkDialogService } from './link-dialog.service';

describe('LinkDialogService', () => {
  let service: LinkDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
