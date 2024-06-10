import { TestBed } from '@angular/core/testing';

import { ReferenceValueResolverService } from './reference-value-resolver.service';

describe('ReferenceValueResolverService', () => {
  let service: ReferenceValueResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReferenceValueResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
