import { ManagersService } from './../services/managers.service';
import { Rosters } from './../classes/rosters';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  lstManagers: Rosters[];
  opManager: string = '';
  afternoonLead: string = '';
  morningLead: string = '';

  constructor(private _managers: ManagersService) {}

  ngOnInit(): void {
    this._managers.getManagers().subscribe((data) => {
      this.lstManagers = data;

      //loop through the objects
      for (var i = 0; i < this.lstManagers.length; i++) {
        if (this.lstManagers[i].SupportChannel === 'Operations Manager') {
          this.opManager = this.lstManagers[i].TeamLead;
        }
        if (this.lstManagers[i].SupportChannel === 'Afternoon Team Lead') {
          this.afternoonLead = this.lstManagers[i].TeamLead;
        }
        if (this.lstManagers[i].SupportChannel === 'Morning Team Lead') {
          this.morningLead = this.lstManagers[i].TeamLead;
        }
      }
    });
  }
}
