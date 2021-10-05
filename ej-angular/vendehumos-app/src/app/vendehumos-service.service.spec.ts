import { TestBed } from '@angular/core/testing';

import { VendehumosServiceService } from './vendehumos-service.service';

describe('VendehumosServiceService', () => {
  let service: VendehumosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendehumosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
