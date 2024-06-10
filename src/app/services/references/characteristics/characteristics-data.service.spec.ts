import { TestBed } from '@angular/core/testing';

import { CharacteristicsDataService } from './characteristics-data.service';

describe('CharacteristicsDataService', () => {
  let service: CharacteristicsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacteristicsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
