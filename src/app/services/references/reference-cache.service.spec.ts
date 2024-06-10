import { TestBed } from '@angular/core/testing';

import { ReferenceCacheService } from './reference-cache.service';

describe('ReferenceCacheService', () => {
  let service: ReferenceCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReferenceCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
