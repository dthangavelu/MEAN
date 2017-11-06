import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyPollNewComponent } from './survey-poll-new.component';

describe('SurveyPollNewComponent', () => {
  let component: SurveyPollNewComponent;
  let fixture: ComponentFixture<SurveyPollNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyPollNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyPollNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
