import { KpiService } from './services/kpi.service';
import { RosterService } from './services/roster.service';
import { HttpClientModule } from '@angular/common/http';
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
<<<<<<< HEAD
import { AddingIssuesComponent } from './adding-issues/adding-issues.component';
import { GeneralStatsComponent } from './general-stats/general-stats.component';
import { LoginComponent } from './login/login.component';
=======
import { FormatDatePipe } from './pipes/format-date.pipe';
>>>>>>> 6233eb275ce16d1c9f784119299b825307fc6b20

@NgModule({
  declarations: [
    AppComponent,
    KpisComponent,
    FooterComponent,
    NavbarComponent,
    RosterComponent,
    AddRosterComponent,
<<<<<<< HEAD
    AddingIssuesComponent,
    GeneralStatsComponent,
    LoginComponent,
=======
    FormatDatePipe,
>>>>>>> 6233eb275ce16d1c9f784119299b825307fc6b20
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [RosterService, KpiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
