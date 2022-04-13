import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsTargetsComponent } from './investments-targets.component';

describe('InvestmentsTargetsComponent', () => {
  let component: InvestmentsTargetsComponent;
  let fixture: ComponentFixture<InvestmentsTargetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentsTargetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentsTargetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
