import { TestBed } from '@angular/core/testing';

import { CompanyFullDataService } from './company-full-data.service';

describe('CompanyFullDataService', () => {
  let service: CompanyFullDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyFullDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
