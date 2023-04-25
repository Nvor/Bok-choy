import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BokChoyUiComponent } from './bok-choy-ui.component';

describe('BokChoyUiComponent', () => {
  let component: BokChoyUiComponent;
  let fixture: ComponentFixture<BokChoyUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BokChoyUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BokChoyUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
