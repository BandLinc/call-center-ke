import { AddRosterComponent } from './add-roster/add-roster.component';
import { RosterComponent } from './roster/roster.component';
import { KpisComponent } from './kpis/kpis.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Define Routes
const routes: Routes = [
  { path: '', component: KpisComponent },
  { path: 'kpis', component: KpisComponent },
  { path: 'roster', component: RosterComponent },
  { path: 'addroster', component: AddRosterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
