import { TestBed, inject } from '@angular/core/testing';

import { SearchRideService } from './search-ride.service';

describe('SearchRideService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchRideService]
    });
  });

  it('should be created', inject([SearchRideService], (service: SearchRideService) => {
    expect(service).toBeTruthy();
  }));
});
