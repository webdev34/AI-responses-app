import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsDisplayComponent } from './results-display.component';

describe('ResultsDisplayComponent', () => {
  let component: ResultsDisplayComponent;
  let fixture: ComponentFixture<ResultsDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsDisplayComponent]
    });
    fixture = TestBed.createComponent(ResultsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
