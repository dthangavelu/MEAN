import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyPollListComponent } from "./survey-poll/survey-poll-list/survey-poll-list.component";
import { IndexComponent } from "./index/index.component";
import { SurveyPollNewComponent } from "./survey-poll/survey-poll-new/survey-poll-new.component";
import { SurveyPollDetailsComponent } from "./survey-poll/survey-poll-details/survey-poll-details.component";

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'survey/:username', component: SurveyPollListComponent },
  { path: 'new_survey/:username', pathMatch: 'full', component: SurveyPollNewComponent },
  { path: 'survey_details/:username/:survey_id', pathMatch: 'full', component: SurveyPollDetailsComponent },    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
