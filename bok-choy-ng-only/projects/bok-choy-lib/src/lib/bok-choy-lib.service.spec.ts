import { TestBed } from '@angular/core/testing';

import { BokChoyLibService } from './bok-choy-lib.service';

describe('BokChoyLibService', () => {
  let service: BokChoyLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BokChoyLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
