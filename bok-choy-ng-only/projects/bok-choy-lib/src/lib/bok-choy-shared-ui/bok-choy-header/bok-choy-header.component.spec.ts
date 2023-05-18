import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BokChoyHeaderComponent } from './bok-choy-header.component';

describe('BokChoyHeaderComponent', () => {
  let component: BokChoyHeaderComponent;
  let fixture: ComponentFixture<BokChoyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BokChoyHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BokChoyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
