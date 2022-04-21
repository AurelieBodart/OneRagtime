import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvestmentsTargetsComponent } from './investments-targets/investments-targets.component';
import { PredictedInvestmentsComponent } from './predicted-investments/predicted-investments.component';

@NgModule({
  declarations: [
    AppComponent,
    InvestmentsTargetsComponent,
    PredictedInvestmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
