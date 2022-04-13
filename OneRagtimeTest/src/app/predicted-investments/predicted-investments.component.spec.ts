import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictedInvestmentsComponent } from './predicted-investments.component';

describe('PredictedInvestmentsComponent', () => {
  let component: PredictedInvestmentsComponent;
  let fixture: ComponentFixture<PredictedInvestmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictedInvestmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictedInvestmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
