import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KpisComponent } from './kpis/kpis.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RosterComponent } from './roster/roster.component';
import { AddRosterComponent } from './add-roster/add-roster.component';
import { AddingIssuesComponent } from './adding-issues/adding-issues.component';
import { GeneralStatsComponent } from './general-stats/general-stats.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    KpisComponent,
    FooterComponent,
    NavbarComponent,
    RosterComponent,
    AddRosterComponent,
    AddingIssuesComponent,
    GeneralStatsComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
