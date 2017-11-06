import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyPollDetailsComponent } from './survey-poll-details.component';

describe('SurveyPollDetailsComponent', () => {
  let component: SurveyPollDetailsComponent;
  let fixture: ComponentFixture<SurveyPollDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyPollDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyPollDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
