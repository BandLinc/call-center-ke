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

//Define Routes
const routes: Routes = [
  { path: '', component: KpisComponent },
  { path: 'kpis', component: KpisComponent },
  { path: 'roster', component: RosterComponent },
  { path: 'addroster', component: AddRosterComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    KpisComponent,
    FooterComponent,
    NavbarComponent,
    RosterComponent,
    AddRosterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
