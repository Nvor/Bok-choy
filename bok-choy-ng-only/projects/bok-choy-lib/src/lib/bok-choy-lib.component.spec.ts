import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BokChoyLibComponent } from './bok-choy-lib.component';

describe('BokChoyLibComponent', () => {
  let component: BokChoyLibComponent;
  let fixture: ComponentFixture<BokChoyLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BokChoyLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BokChoyLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
