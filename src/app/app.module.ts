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
import { FormatDatePipe } from './pipes/format-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    KpisComponent,
    FooterComponent,
    NavbarComponent,
    RosterComponent,
    AddRosterComponent,
    FormatDatePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [RosterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
