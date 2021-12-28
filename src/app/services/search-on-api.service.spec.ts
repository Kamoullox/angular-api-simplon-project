import { TestBed } from '@angular/core/testing';

import { SearchOnApiService } from './search-on-api.service';

describe('SearchOnApiService', () => {
  let service: SearchOnApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchOnApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
