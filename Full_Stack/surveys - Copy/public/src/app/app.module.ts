import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule

import { SurveyService } from './survey.service';
import { IndexComponent } from './index/index.component';
import { SurveyPollComponent } from './survey-poll/survey-poll.component';
import { SurveyPollNewComponent } from './survey-poll/survey-poll-new/survey-poll-new.component';
import { SurveyPollListComponent } from './survey-poll/survey-poll-list/survey-poll-list.component';
import { SurveyPollDetailsComponent } from './survey-poll/survey-poll-details/survey-poll-details.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SurveyPollComponent,
    SurveyPollNewComponent,
    SurveyPollListComponent,
    SurveyPollDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <-- Include module in our AppModules
		HttpModule // <-- Include module in our AppModules
  ],
  providers: [SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
