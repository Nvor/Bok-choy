import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BokSettingsComponent } from './bok-settings.component';

describe('BokSettingsComponent', () => {
  let component: BokSettingsComponent;
  let fixture: ComponentFixture<BokSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BokSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BokSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
