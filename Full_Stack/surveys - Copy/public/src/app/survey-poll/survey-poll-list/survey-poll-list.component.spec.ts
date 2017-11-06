import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyPollListComponent } from './survey-poll-list.component';

describe('SurveyPollListComponent', () => {
  let component: SurveyPollListComponent;
  let fixture: ComponentFixture<SurveyPollListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyPollListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyPollListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
