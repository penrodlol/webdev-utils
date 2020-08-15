import { TestBed } from '@angular/core/testing';

import { JsonPrettyService } from './json-pretty.service';

describe('JsonPrettyService', () => {
  let service: JsonPrettyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonPrettyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
