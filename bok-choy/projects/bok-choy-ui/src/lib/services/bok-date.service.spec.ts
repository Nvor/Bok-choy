import { TestBed } from '@angular/core/testing';

import { BokDateService } from './bok-date.service';

describe('BokDateService', () => {
  let service: BokDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BokDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
