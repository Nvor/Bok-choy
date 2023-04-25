import { TestBed } from '@angular/core/testing';

import { BokChoyUiService } from './bok-choy-ui.service';

describe('BokChoyUiService', () => {
  let service: BokChoyUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BokChoyUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
