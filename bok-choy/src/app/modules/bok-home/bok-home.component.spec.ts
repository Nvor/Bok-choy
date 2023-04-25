import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BokHomeComponent } from './bok-home.component';

describe('BokHomeComponent', () => {
  let component: BokHomeComponent;
  let fixture: ComponentFixture<BokHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BokHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BokHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
