import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SeattleComponent } from './seattle/seattle.component'
import { BurbankComponent } from './burbank/burbank.component'
import { ChicagoComponent } from './chicago/chicago.component'
import { DallasComponent } from './dallas/dallas.component'
import { SanjoseComponent } from './sanjose/sanjose.component'
import { WashingtondcComponent } from './washingtondc/washingtondc.component'
import { HomeComponent } from './home/home.component'


const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'seattle', pathMatch: 'full', component: SeattleComponent},
  {path: 'burbank', pathMatch: 'full', component: BurbankComponent},
  {path: 'chicago', pathMatch: 'full', component: ChicagoComponent},
  {path: 'dallas', pathMatch: 'full', component: DallasComponent},
  {path: 'sanjose', pathMatch: 'full', component: SanjoseComponent},
  {path: 'washingtondc', pathMatch: 'full', component: WashingtondcComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
