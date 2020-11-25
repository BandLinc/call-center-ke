import { LoginComponent } from './login/login.component';
import { AddRosterComponent } from './add-roster/add-roster.component';
import { RosterComponent } from './roster/roster.component';
import { KpisComponent } from './kpis/kpis.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Define Routes
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'kpis', component: KpisComponent },
  { path: 'roster', component: RosterComponent },
  { path: 'addroster', component: AddRosterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
