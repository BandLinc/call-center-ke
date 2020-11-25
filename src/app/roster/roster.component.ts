import { Rosters } from './../classes/rosters';
import { HttpClient } from '@angular/common/http';
import { RosterService } from './../services/roster.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
})
export class RosterComponent implements OnInit {
  counter: number = 0;
  lstRosters: Rosters[];
  opManager: string = '';
  afternoonLead: string = '';
  morningLead: string = '';
  constructor(private _dutyroster: RosterService) {}

  ngOnInit() {
    this._dutyroster.getRoster().subscribe((data) => {
      this.lstRosters = data;

      //loop through the objects
      for (var i = 0; i < this.lstRosters.length; i++) {
        if (this.lstRosters[i].SupportChannel === 'Operations Manager') {
          this.opManager = this.lstRosters[i].TeamLead;
        }
        if (this.lstRosters[i].SupportChannel === 'Afternoon Team Lead') {
          this.afternoonLead = this.lstRosters[i].TeamLead;
        }
        //Calculation
        if (this.lstRosters[i].SupportChannel === 'Morning Team Lead') {
          this.morningLead = this.lstRosters[i].TeamLead;
        }
      }
    });
  }
}
