import { TestBed } from '@angular/core/testing';

import { AllserveService } from './allserve.service';

describe('AllserveService', () => {
  let service: AllserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
